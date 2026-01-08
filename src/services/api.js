// src/services/api.js

const API_BASE_URL = 'http://localhost:5000/api';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Menu API calls
export const menuAPI = {
  // Get all menu items
  getAll: () => apiCall('/menu'),

  // Get menu items by category
  getByCategory: (category) => apiCall(`/menu/category/${category}`),

  // Get single menu item
  getById: (id) => apiCall(`/menu/${id}`),

  // Create menu item (admin)
  create: (data) => apiCall('/menu', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  // Update menu item (admin)
  update: (id, data) => apiCall(`/menu/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),

  // Delete menu item (admin)
  delete: (id) => apiCall(`/menu/${id}`, {
    method: 'DELETE',
  }),
};

// Order API calls
export const orderAPI = {
  // Get all orders
  getAll: () => apiCall('/orders'),

  // Get single order
  getById: (id) => apiCall(`/orders/${id}`),

  // Create new order
  create: (orderData) => apiCall('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
  }),

  // Update order status
  updateStatus: (id, status) => apiCall(`/orders/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  }),

  // Delete order
  delete: (id) => apiCall(`/orders/${id}`, {
    method: 'DELETE',
  }),
};

// Auth API calls
export const authAPI = {
  // Register new user
  register: (userData) => apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),

  // Login user
  login: (credentials) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
};