// app/lists/all/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import { getAllLists, deleteList } from '@/lib/api'; // Assuming you'll add getAllLists and deleteList to api.js
import Link from 'next/link';

export default function AllLists() {
  const [lists, setLists] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchLists() {
      try {
        const data = await getAllLists();
        setLists(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch lists.');
      }
    }
    fetchLists();
  }, []);

  const handleDelete = async (listId) => {
    try {
      await deleteList(listId);
      setLists(lists.filter((list) => list.id !== listId));
      setMessage('List deleted successfully!');
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to delete list.');
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
        <h1 className="text-2xl font-bold mb-6">All Lists</h1>

        {message && <p className="text-green-400 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {lists.length > 0 ? (
          <ul className="space-y-4">
            {lists.map((list) => (
              <li key={list.id} className="p-4 bg-gray-700 rounded-lg flex items-center justify-between">
                <div>
                  <Link href={`/lists/${list.id}`} className="text-lg font-semibold hover:text-purple-400">
                    {list.listName}
                  </Link>
                  <p className="text-sm text-gray-400">{list.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDelete(list.id)}
                    className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No lists found.</p>
        )}
      </main>
    </div>
  );
}