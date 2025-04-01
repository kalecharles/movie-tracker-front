// app/lists/[listId]/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import { getListDetails, deleteMovieFromList } from '@/lib/api'; // Assuming you'll add getListDetails and deleteMovieFromList to api.js
import { useParams } from 'next/navigation';

export default function ListDetails() {
  const [list, setList] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { listId } = useParams();

  useEffect(() => {
    async function fetchListDetails() {
      try {
        const data = await getListDetails(listId);
        setList(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch list details.');
      }
    }
    fetchListDetails();
  }, [listId]);

  const handleDeleteMovie = async (movieId) => {
    try {
      await deleteMovieFromList(listId, movieId);
      setList({
        ...list,
        entries: list.entries.filter((entry) => entry.movieId !== movieId),
      });
      setMessage('Movie removed from list successfully!');
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to remove movie from list.');
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

  if (!list) {
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
        <h1 className="text-2xl font-bold mb-6">{list.listName}</h1>
        <p className="text-gray-400 mb-4">{list.description}</p>

        {message && <p className="text-green-400 mb-4">{message}</p>}

        {list.entries && list.entries.length > 0 ? (
          <ul className="space-y-4">
            {list.entries.map((entry) => (
              <li key={entry.movieId} className="p-4 bg-gray-700 rounded-lg flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{entry.movieTitle}</h2>
                  <p className="text-sm text-gray-400">{entry.movieDescription}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDeleteMovie(entry.movieId)}
                    className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies in this list.</p>
        )}
      </main>
    </div>
  );
}