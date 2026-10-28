"use client";

import { useState } from "react";

const pubgProducts = [
  { amount: "60 UC", price: 4500 },
  { amount: "325 UC", price: 21500 },
  { amount: "660 UC", price: 42500 },
  { amount: "1800 UC", price: 105000 },
  { amount: "3850 UC", price: 209000 },
  { amount: "8100 UC", price: 420000 },
  { amount: "16200 UC", price: 850000 },
  { amount: "24300 UC", price: 1270000 },
  { amount: "32400 UC", price: 1690000 },
  { amount: "40500 UC", price: 2120000 },
];

const mlbbProducts = [
  { amount: "86 Diamonds", price: 5800 },
  { amount: "172 Diamonds", price: 11800 },
  { amount: "257 Diamonds", price: 17000 },
  { amount: "706 Diamonds", price: 46000 },
  { amount: "1049 Diamonds", price: 68800 },
  { amount: "2195 Diamonds", price: 137000 },
  { amount: "3688 Diamonds", price: 227000 },
  { amount: "5532 Diamonds", price: 340000 },
  { amount: "9288 Diamonds", price: 570000 },
  { amount: "Twilight Pass", price: 37500 },
  { amount: "Weekly Diamond Pass", price: 7000 },
];

export default function Home() {
  const [game, setGame] = useState("PUBG Mobile");
const [selectedProduct, setSelectedProduct] = useState<{
  amount: string;
  price: number;
} | null>(null);

const [playerId, setPlayerId] = useState("");
const [serverId, setServerId] = useState("");

const [paymentMethod, setPaymentMethod] = useState("KBZPay");

  const products = game === "PUBG Mobile" ? pubgProducts : mlbbProducts;

  return (
    <main className="min-h-screen bg-[#090611] text-white">
      <header className="border-b border-fuchsia-500/20 bg-[#10091b]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div>
            <h1 className="text-2xl font-black tracking-wide text-fuchsia-400">
              SGS <span className="text-yellow-400">TOP-UP</span>
            </h1>
            <p className="text-xs text-gray-400">SPICY GAME SHOP</p>
          </div>
          <a
            href="https://t.me/seamus2004"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-fuchsia-500/40 px-4 py-2 text-sm hover:bg-fuchsia-500/10"
          >
            Telegram Order
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl border border-fuchsia-500/20 bg-gradient-to-br from-[#24103b] via-[#150c25] to-[#0c1024] p-8 md:p-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Fast · Secure · Easy
          </p>
          <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            YOUR GAME.
            <span className="block text-fuchsia-400">YOUR POWER.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-gray-300">
            PUBG Mobile UC နှင့် Mobile Legends Diamonds များကို SGS မှာ
            လွယ်ကူစွာ မှာယူလိုက်ပါ။
          </p>
          <p className="mt-4 text-sm text-gray-400">
            ငွေပေးချေမှုကို စစ်ဆေးပြီးမှ Order ကို အတည်ပြုပါမည်။
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <h2 className="mb-6 text-2xl font-black md:text-3xl">
          Choose Your Game
        </h2>

        <div className="mb-8 flex flex-wrap gap-3">
          {["PUBG Mobile", "MLBB"].map((item) => (
            <button
              key={item}
              onClick={() => setGame(item)}
              className={`rounded-xl px-6 py-3 font-bold transition ${
                game === item
                  ? "bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-900/40"
                  : "border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {item === "MLBB" ? "Mobile Legends: Bang Bang" : item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.amount}
              className="rounded-2xl border border-white/10 bg-[#15101f] p-5 transition hover:border-fuchsia-500/60"
            >
              <p className="text-sm text-gray-400">{game}</p>
              <h3 className="mt-3 text-xl font-extrabold">{product.amount}</h3>
              <p className="mt-4 text-2xl font-black text-yellow-400">
                {product.price.toLocaleString("en-US")} MMK
              </p>

<button
  type="button"
  onClick={() => {
    setSelectedProduct(product);
    setPlayerId("");
    setServerId("");
    setPaymentMethod("KBZPay");
  }}
  className="mt-5 block w-full rounded-xl bg-fuchsia-600 py-3 text-center font-bold hover:bg-fuchsia-500"
>
  Order Now
</button>
            </article>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4">
          <div className="my-auto w-full max-w-lg rounded-2xl border border-fuchsia-500/40 bg-[#15101f] p-6 shadow-2xl shadow-fuchsia-900/20">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-black text-fuchsia-400">
                Place Your Order
              </h2>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="rounded-lg px-3 py-1 text-xl text-gray-400 hover:bg-white/10 hover:text-white"
                aria-label="Close order form"
              >
                ×
              </button>
            </div>

            <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-gray-400">{game}</p>
              <p className="mt-1 text-lg font-bold">
                {selectedProduct.amount}
              </p>
              <p className="mt-2 text-2xl font-black text-yellow-400">
                {selectedProduct.price.toLocaleString("en-US")} MMK
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();

                const message = [
                  "SGS TOP-UP ORDER",
                  `Game: ${game}`,
                  `Product: ${selectedProduct.amount}`,
                  `Price: ${selectedProduct.price.toLocaleString("en-US")} MMK`,
                  `Player ID: ${playerId}`,
                  ...(game === "MLBB" ? [`Server ID: ${serverId}`] : []),
                  `Payment Method: ${paymentMethod}`,
                ].join("\n");

                window.open(
                  `https://t.me/seamus2004?text=${encodeURIComponent(message)}`,
                  "_blank"
                );
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-300">
                  {game === "PUBG Mobile" ? "PUBG Player ID" : "MLBB Player ID"}
                </label>

                <input
                  type="text"
                  value={playerId}
                  onChange={(event) => setPlayerId(event.target.value)}
                  required
                  inputMode="numeric"
                  placeholder="Enter your Player ID"
                  className="w-full rounded-xl border border-white/10 bg-[#090611] px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                />
              </div>

              {game === "MLBB" && (
                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-300">
                    Server ID
                  </label>

                  <input
                    type="text"
                    value={serverId}
                    onChange={(event) => setServerId(event.target.value)}
                    required
                    inputMode="numeric"
                    placeholder="Enter your Server ID"
                    className="w-full rounded-xl border border-white/10 bg-[#090611] px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                  />
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-300">
                  Payment Method
                </label>

                <select
                  value={paymentMethod}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#090611] px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                >
                  <option value="KBZPay">KBZPay</option>
                  <option value="Wave Money">Wave Money</option>
                  <option value="AYA Pay">AYA Pay</option>
                  <option value="UAB Pay">UAB Pay</option>
                </select>
              </div>

              <p className="text-sm leading-6 text-gray-400">
                အချက်အလက်များ မှန်ကန်ကြောင်း စစ်ဆေးပြီးမှ Order ကို ဆက်လက်လုပ်ဆောင်ပါ။
              </p>

              <button
                type="submit"
                className="w-full rounded-xl bg-fuchsia-600 py-3 font-bold text-white transition hover:bg-fuchsia-500"
              >
                Continue via Telegram
              </button>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="w-full rounded-xl border border-white/10 py-3 font-bold text-gray-300 hover:bg-white/5"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-gray-500">
        2026 Spicy Game Shop · SGS
        <p className="mt-2">Customer Support: @seamus2004</p>
      </footer>
    </main>
  );
}