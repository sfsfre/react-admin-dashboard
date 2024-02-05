// src/LoginPage.js
import { Dashboard } from '@mui/icons-material';
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, let's just check if both username and password are non-empty
    if (username && password) {
      setLoggedIn(true);
      
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login Page</h2>
      {loggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
