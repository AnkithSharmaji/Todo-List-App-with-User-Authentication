import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Check if the user exists in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const authenticatedUser = users.find(
      (user) =>
        user.username === userData.username && user.password === userData.password
    );

    if (authenticatedUser) {
      setUser(authenticatedUser);
      return true; // Login successful
    } else {
      return false; // Login failed
    }
  };

  const register = (userData) => {
    // Check if the username already exists in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.username === userData.username);

    if (existingUser) {
      return false; // Username already exists, registration failed
    }

    // If the username doesn't exist, add the user to local storage
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    setUser(userData);

    return true; // Registration successful
  };

  const logout = () => {
    setUser(null); // Clear user data from state
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
