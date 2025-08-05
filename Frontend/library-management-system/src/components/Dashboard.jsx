// Dashboard.jsx
import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, Librarian</h1>
        <p>Manage everything from one place.</p>
      </header>

      <div className="dashboard-grid">
        <Link to="/books" className="dashboard-card books">
          <h3>Manage Books</h3>
          <p>Add/edit books and manage copies.</p>
        </Link>

        <Link to="/members" className="dashboard-card members">
          <h3>Manage Members</h3>
          <p>Track membership status and details.</p>
        </Link>

        <Link to="/issue-return" className="dashboard-card issue-return">
          <h3>Issue/Return</h3>
          <p>Handle circulation of books.</p>
        </Link>

        <Link to="/payments" className="dashboard-card payments">
          <h3>Payments</h3>
          <p>Collect fees and fines from members.</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
