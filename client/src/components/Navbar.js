import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Make sure this file exists for styling

function Navbar({ user, setUser, setToken }) {
  const navigate = useNavigate();

  // Logout handler: clears auth state and localStorage, then redirects to login
  const handleLogout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ReWear</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {!user ? (
          // If not logged in, show Sign Up and Login links
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        ) : (
          // If logged in, show Dashboard and Logout
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
