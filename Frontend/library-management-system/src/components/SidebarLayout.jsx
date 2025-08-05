import React from "react";
import {
  FaBook,
  FaUserFriends,
  FaExchangeAlt,
  FaMoneyCheckAlt,
  FaTachometerAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function SidebarLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="bg-dark text-white d-flex flex-column justify-content-between min-vh-100"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "240px",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      <div>
        <h4 className="mb-4">📚 Library</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink to="/dashboard" className="nav-link text-white d-flex align-items-center">
              <FaTachometerAlt className="me-2" /> Dashboard
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/books" className="nav-link text-white d-flex align-items-center">
              <FaBook className="me-2" /> Books
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/members" className="nav-link text-white d-flex align-items-center">
              <FaUserFriends className="me-2" /> Members
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/issue-return" className="nav-link text-white d-flex align-items-center">
              <FaExchangeAlt className="me-2" /> Issue/Return
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/payments" className="nav-link text-white d-flex align-items-center">
              <FaMoneyCheckAlt className="me-2" /> Payments
            </NavLink>
          </li>
        </ul>
      </div>

      <button
        className="btn btn-danger w-100 d-flex align-items-center justify-content-center mt-4"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="me-2" /> Logout
      </button>
    </div>
  );
}
