import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard({ token, user }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(res.data.message);
      } catch (err) {
        setMessage("You are not authorized.");
      }
    }
    fetchData();
  }, [token]);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
      {user && (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
