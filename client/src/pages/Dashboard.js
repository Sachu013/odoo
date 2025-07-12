import React from "react";
import { useNavigate } from "react-router-dom";
import './Contact.css';

function Dashboard({ user, setToken, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome, {user?.name}</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Add more dashboard content here */}
    </div>
  );
}

export default Dashboard;
