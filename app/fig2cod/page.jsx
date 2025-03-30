import React from "react";

function Page() {
  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-4">
        <nav className="space-y-2">
          <a
            href="#"
            className="block py-2 px-4 rounded hover:bg-gray-700 text-purple-400 font-semibold"
          >
            Home
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
            WatchList
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
            Review
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
            Diary
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
            Profile
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="text-4xl font-bold mb-8">Welcome to</div>
        <div className="text-6xl font-extrabold mb-12">The Movie Tracker</div>
        <div className="flex space-x-4">
          <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full font-semibold">
            EXPLORE
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full font-semibold">
            ENJOY
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full font-semibold">
            LIVE
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://via.placeholder.com/300x450" alt="Troll" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://via.placeholder.com/300x450" alt="Megan" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/300x450"
              alt="Puss in Boots"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
