// app/movie/[movieId]/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import { getMovieDetails, addMovieToFavorites } from '@/lib/api'; // Assuming you'll add getMovieDetails and addMovieToFavorites to api.js
import { useParams } from 'next/navigation';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch movie details.');
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  const handleAddToFavorites = async () => {
    try {
      await addMovieToFavorites(movieId);
      setMessage('Movie added to favorites!');
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to add movie to favorites.');
      setMessage('');
    }
  };

  if (error) {
    return (
      <div className="flex h-screen bg-gray-800 text-white">
        <main className="flex-1 p-8">
          <p className="text-red-500">{error}</p>
        </main>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex h-screen bg-gray-800 text-white">
        <main className="flex-1 p-8">
          <p>Loading...</p>
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
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <img src={movie.posterUrl} alt={movie.title} className="w-48 h-72 object-cover rounded mb-4" />
        <p className="text-gray-400 mb-4">{movie.overview}</p>
        <p className="text-sm text-gray-400 mb-4">Release Date: {movie.releaseDate}</p>

        {message && <p className="text-green-400 mb-4">{message}</p>}

        <button
          onClick={handleAddToFavorites}
          className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded"
        >
          Add to Favorites
        </button>
      </main>
    </div>
  );
}