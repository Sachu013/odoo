import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>ReWear App</h1>
      {!token ? (
        <>
          <Signup />
          <Login setToken={setToken} setUser={setUser} />
        </>
      ) : (
        <Dashboard token={token} user={user} />
      )}
    </div>
  );
}

export default App;
