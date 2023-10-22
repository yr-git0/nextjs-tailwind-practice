import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen place-content-center lg:grid-cols-2 xl:grid-cols-3">
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <div className="flex flex-col space-y-2 p-5">
          <details className="select-none open:text-white open:bg-indigo-300">
            <summary className="cursor-pointer">What is my fav. food.</summary>
            <span className="selection:bg-indigo-300 selection:text-white">
              김치
            </span>
          </details>
          <div className="flex flex-col space-y-2 p-5">
            <ul className="list-disc marker:text-red-500">
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2 p-5">
            <input
              type="file"
              className="file:cursor-pointer file:transition-colors file:hover:text-green-500 file:hover:border-green-500 file:hover:border-2 file:hover:bg-white file:border-0 file:rounded-xl file:px-3 file:text-white file:font-bold file:bg-green-500"
            />
          </div>
          <div className="flex flex-col space-y-2 p-5">
            <p className="first-letter:text-7xl first-letter:hover:text-blue-500 cursor-pointer">
              Hello everyone!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <form className="flex flex-col space-y-2 bg-violet-300 p-5 focus-within:bg-teal-100">
          <input
            type="text"
            required
            placeholder="Username"
            className="peer required:border-2 border-yellow-400 invalid:border-red-500 disabled:opacity-50"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="placeholder-shown:bg-purple-950"
          />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500 font-bold">
            This input is invalid
          </span>
          <span className="hidden peer-valid:block peer-valid:text-teal-500 font-bold">
            Awesome username
          </span>
          <input type="submit" value="Login" className="bg-white" />
        </form>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl sm:bg-violet-300 md:bg-teal-200 lg:bg-green-300 xl:bg-yellow-200 2xl:bg-pink-200 sm:hover:bg-red-400">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul className="space-y-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between odd:bg-blue-300 even:bg-yellow-200"
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul className="space-y-1">
          {["a", "b", "c", ""].map((c, i) => (
            <li
              className="bg-pink-300 empty:hidden empty:bg-teal-200 empty:p-2"
              key={i}
            >
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span className="text-gray-500">Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto block
        hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500"
        >
          Checkout
        </button>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col justify-between dark:bg-black">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span className="text-gray-500">Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto block
        hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500"
        >
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
        <div className="bg-blue-500 p-5 pb-14 lg:pb-44 landscape:bg-teal-500 portrait:bg-yellow-300">
          <span className="text-white text-lg">Profile</span>
        </div>
        <div />
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative justify-between items-end -top-16">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="bg-zinc-300 h-24 w-24 rounded-full" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$340</span>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-semibold group-hover:text-yellow-500">
              Tony Molloy
            </span>
            <span className="text-sm text-gray-500 group-hover:font-bold">
              미국
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="flex justify-between items-center">
          <span className="text-4xl">←</span>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-bold">⭐️ 4.9</span>
            <div className="border-gray-500 rounded-sm shadow-lg">💖</div>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-bold text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-extrabold text-2xl">$450</span>
          <button className="bg-blue-500 text-center py-2 px-5 text-white text-xs rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-3">
        <div className="flex justify-between items-center">
          <span className="text-4xl">←</span>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-bold">⭐️ 4.9</span>
            <div className="border-gray-500 rounded-sm shadow-lg">💖</div>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-bold text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-extrabold text-2xl">$450</span>
          <button className="bg-blue-500 text-center py-2 px-5 text-white text-xs rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
