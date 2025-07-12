// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.MODE === 'development'
    ? 'http://localhost:5000/api'
    : 'https://e-commerce-store-xl98.onrender.com/api',
  withCredentials: true, // allow sending cookies (important for JWT auth)
});

export default instance;

