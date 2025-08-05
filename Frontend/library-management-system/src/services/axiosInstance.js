import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/member', // 🔁 Update with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
