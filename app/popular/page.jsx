// app/popular/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '@/lib/api'; // Assuming you'll add getPopularMovies to api.js
import Link from 'next/link';

export default function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch popular movies.');
      }
    }
    fetchPopularMovies();
  }, []);

  if (error) {
    return (
      <div className="flex h-screen bg-gray-800 text-white">
        <main className="flex-1 p-8">
          <p className="text-red-500">{error}</p>
        </main>
      </div>
    );
  }

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
        <h1 className="text-2xl font-bold mb-6">Popular Movies</h1>

        {movies.length > 0 ? (
          <ul className="space-y-4">
            {movies.map((movie) => (
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
        ) : (
          <p>Loading popular movies...</p>
        )}
      </main>
    </div>
  );
}
