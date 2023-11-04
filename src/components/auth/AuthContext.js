// src/auth/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is already authenticated (e.g., from local storage)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData) => {
    // Implement login logic here, e.g., check user credentials from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const authenticatedUser = users.find(
      (user) => user.username === userData.username && user.password === userData.password
    );

    if (authenticatedUser) {
      setUser(authenticatedUser);
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      return true;
    }

    return false;
  };

  const register = (userData) => {
    // Implement registration logic here, e.g., store user data in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username is already taken
    if (users.some((user) => user.username === userData.username)) {
      return false;
    }

    // Add the new user and store it in local storage
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));

    return true;
  };

  const logout = () => {
    // Implement logout logic here, e.g., clear user data from state and local storage
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
