import pool from "./db";

async function initDatabase() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await client.query(`
      CREATE TABLE IF NOT EXISTS customers (
        id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS wallets (
        id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        customer_id BIGINT NOT NULL REFERENCES customers(id),
        currency VARCHAR(3) NOT NULL CHECK (currency IN ('MMK', 'USD')),
        balance_minor BIGINT NOT NULL DEFAULT 0 CHECK (balance_minor >= 0),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE (customer_id, currency)
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS wallet_transactions (
        id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        wallet_id BIGINT NOT NULL REFERENCES wallets(id),
        type VARCHAR(20) NOT NULL CHECK (
          type IN ('DEPOSIT', 'PURCHASE', 'REFUND', 'ADJUSTMENT')
        ),
        amount_minor BIGINT NOT NULL CHECK (amount_minor > 0),
        status VARCHAR(20) NOT NULL DEFAULT 'PENDING' CHECK (
          status IN ('PENDING', 'COMPLETED', 'REJECTED')
        ),
        reference VARCHAR(255) UNIQUE,
        description TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    await client.query("COMMIT");
    console.log("Database tables created successfully.");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

initDatabase().catch((error) => {
  console.error("Database initialization failed:", error);
  process.exitCode = 1;
});