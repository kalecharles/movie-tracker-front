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