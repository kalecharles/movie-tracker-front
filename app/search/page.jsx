// app/search/page.jsx

'use client';

import React, { useState } from 'react';
import { searchMovies } from '@/lib/api'; // Assuming you'll add searchMovies to api.js
import Link from 'next/link';

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await searchMovies(query);
      setResults(data);
    } catch (err) {
      setError(err.message || 'Failed to search movies.');
      setResults([]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Sidebar (You can keep it or remove it based on your needs) */}
      <aside className="w-64 bg-gray-900 p-4">
        <nav className="space-y-2">
          <a
            href="#"
            className="block py-2 px-4 rounded hover:bg-gray-700 text-purple-400 font-semibold"
          >
            Home
          </a>
          {/* Add other sidebar links as needed */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Search Movies</h1>

        <form onSubmit={handleSearch} className="mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter movie title"
            className="p-2 w-full bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
          />
          <button
            type="submit"
            className="mt-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded"
          >
            Search
          </button>
        </form>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {results.length > 0 && (
          <ul className="space-y-4">
            {results.map((movie) => (
              <li key={movie.movieId} className="p-4 bg-gray-700 rounded-lg flex items-center">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-24 h-36 object-cover rounded mr-4"
                />
                <div>
                  <Link href={`/movie/${movie.movieId}`} className="text-lg font-semibold hover:text-purple-400">
                    {movie.title}
                  </Link>
                  <p className="text-sm text-gray-400">{movie.overview}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}