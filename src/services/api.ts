import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

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