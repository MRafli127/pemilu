import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5434',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // Add timeout to prevent hanging
});

// Enhanced error handling
api.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      // Server responded with error status (4xx/5xx)
      console.error('Backend responded with error:', {
        status: error.response.status,
        data: error.response.data,
        url: error.config.url
      });
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', {
        url: error.config.url,
        message: 'Is the backend running?'
      });
    } else {
      // Other errors
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;