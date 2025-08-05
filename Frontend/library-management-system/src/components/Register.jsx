import React, { useState } from 'react';
import './auth.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'confirmPassword') setTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    toast.success('Account created successfully!');
    console.log('Form Submitted:', formData);
  };

  const isMatch = formData.password === formData.confirmPassword;

  return (
    <div className="full-page auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Join the Library</h2>
        <form onSubmit={handleSubmit}>
          <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="form-control" />
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="form-control" />
          <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" required className="form-control" />
          <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="form-control" />
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            className={`form-control ${touched ? (isMatch ? 'valid' : 'invalid') : ''}`}
          />
          <button type="submit" className="btn-submit">Create Account</button>
        </form>
        <p className="redirect-msg">Already a member? <a href="/login">Login</a></p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
