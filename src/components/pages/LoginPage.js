import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    const success = login({ username, password });
    if (success) {
      // Redirect to the dashboard or show a success message
      setError('');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="page-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginPage;
