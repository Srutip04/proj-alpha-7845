import axios, { AxiosError } from 'axios';

const API_URL = 'https://proj-alpha-7845.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;
      
      if (status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
      
      if (status === 403) {
        window.location.href = '/forbidden';
      }
      
      if (status === 404) {
        window.location.href = '/not-found';
      }
    }
    return Promise.reject(error);
  }
);

export const login = async (email: string, password: string) => {
  const response = await api.post('/users/login', { email, password });
  return response.data;
};

export const register = async (name: string, email: string, password: string) => {
  const response = await api.post('/users', { name, email, password });
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get('/users/profile');
  return response.data;
};

export default api;