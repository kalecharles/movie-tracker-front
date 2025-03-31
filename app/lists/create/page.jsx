// app/lists/create/page.js

'use client';

import React, { useState } from 'react';
import { createList } from '@/lib/api'; // Assuming you'll add createList to api.js

export default function CreateList() {
  const [listName, setListName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await createList({ listName, description });
      setMessage('List created successfully!');
      setListName('');
      setDescription('');
    } catch (err) {
      setError(err.message || 'Failed to create list.');
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
        <h1 className="text-2xl font-bold mb-6">Create New List</h1>

        {message && <p className="text-green-400 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">List Name</label>
            <input
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-white">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded"
          >
            Create List
          </button>
        </form>
      </main>
    </div>
  );
}