
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.atonixcorp.com/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Optional: Add interceptors for auth or logging
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;