// lib/api.js

const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your Spring Boot API URL

export async function registerUser(userData) {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Failed to register user');
  }

  return response.text();
}

export async function loginUser(loginData) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Invalid username or password');
  }

  return response.text();
}

export async function getWelcomeMessage() {
    const response = await fetch(`${API_BASE_URL}/`);

    if(!response.ok){
        throw new Error('failed to get welcome message');
    }

    return response.text();
}

export async function getOauthUrl(){
    const response = await fetch(`${API_BASE_URL}/oauth2/authorization/google`);

    if(!response.ok){
        throw new Error('failed to get oauth url');
    }

    return response.text();
}

export async function createList(listData) {
  const response = await fetch(`${API_BASE_URL}/lists/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(listData),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Failed to create list');
  }

  return response.json(); // Assuming the backend returns a JSON response
}

export async function addMovieToList(listId, movieData) {
  const response = await fetch(`${API_BASE_URL}/lists/${listId}/add-movie`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieData),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Failed to add movie to list');
  }

  return response.json(); // Assuming the backend returns a JSON response
}
export async function updateMovieDescription(listId, updateData) {
  const response = await fetch(`${API_BASE_URL}/lists/${listId}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Failed to update movie description');
  }

  return response.json(); // Assuming the backend returns a JSON response
}
export async function getAllLists() {
  const response = await fetch(`${API_BASE_URL}/lists/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Failed to fetch lists');
  }

  return response.json(); // Assuming the backend returns a JSON array of lists
}

export async function deleteList(listId) {
  const response = await fetch(`${API_BASE_URL}/lists/${listId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Failed to delete list');
  }

  return response.json(); // Assuming the backend returns a JSON success message
}