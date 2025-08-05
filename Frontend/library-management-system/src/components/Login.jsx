// Login.jsx
import React, { useState } from 'react';
import './auth.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      toast.error('Please enter both username and password.');
      return;
    }

    // 🔗 API call would go here
    toast.success('Login successful!');
    console.log('Logging in with:', credentials);
  };

  return (
    <div className="full-page auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Librarian Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-submit">Login</button>
        </form>
        <p className="redirect-msg">
          Don't have an account? <a href="/register">Join Library</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
