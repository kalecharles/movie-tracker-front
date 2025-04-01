// app/favorites/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import { getFavorites, removeFavorite } from '@/lib/api'; // Assuming you'll add getFavorites and removeFavorite to api.js
import Link from 'next/link';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const data = await getFavorites();
        setFavorites(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch favorites.');
      }
    }
    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (movieId) => {
    try {
      await removeFavorite(movieId);
      setFavorites(favorites.filter((movie) => movie.movieId !== movieId));
      setMessage('Movie removed from favorites!');
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to remove movie from favorites.');
      setMessage('');
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
        <h1 className="text-2xl font-bold mb-6">Favorites</h1>

        {message && <p className="text-green-400 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {favorites.length > 0 ? (
          <ul className="space-y-4">
            {favorites.map((movie) => (
              <li key={movie.movieId} className="p-4 bg-gray-700 rounded-lg flex items-center justify-between">
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
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleRemoveFavorite(movie.movieId)}
                    className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorite movies.</p>
        )}
      </main>
    </div>
  );
}