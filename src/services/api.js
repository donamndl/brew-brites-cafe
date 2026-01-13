const API_URL = 'http://localhost:5000/api';

export const orderAPI = {
  create: async (orderData) => {
    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      return await response.json();
    } catch (error) {
      throw new Error('Connection failed: ' + error.message);
    }
  }
};