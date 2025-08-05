// src/components/Login.jsx
import React, { useState } from "react";
import "./auth.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      const data = await loginUser(credentials);
      toast.success("Login successful!");
      localStorage.setItem("token", data.token); // assuming your API returns token
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="full-page auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Librarian Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email or username"
            className="form-control"
            value={credentials.email}
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
          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>
        <p className="redirect-msg">
          Don't have an account? <a href="/signup">Join Library</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
