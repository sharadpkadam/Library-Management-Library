import API from './axiosInstance';

export const loginUser = async (credentials) => {
  try {
    const res = await API.post('/login', credentials);
    return res.data; // should contain token or user object
  } catch (err) {
    throw err.response?.data?.message || 'Login failed';
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await API.post('/signup', userData);
    return response.data;
  } catch (err) {
    throw err.response?.data?.message || 'Registration failed';
  }
};
