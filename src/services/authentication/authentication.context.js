import React, { useState, createContext } from 'react';

import { loginRequest, registerRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const u = await loginRequest(email, password);

      if (u.status && u.status === 'success') {
        console.log(`Response success : ${u.status}`);
        setIsAuthenticated(true);
        setUser(u);
        setIsLoading(false);
      } else {
        console.log(`Response fail :  ${u.status} ${u.message}`);
        setIsLoading(false);
        setError(u.message);
        setIsAuthenticated(false);
      }
    } catch (e) {
      setIsLoading(false);
      setError(e);
      setIsAuthenticated(false);
      console.log(`OuterError: ${e}`);
    }
  };

  const onRegister = async (name, email, password, repeatedPassword) => {
    // if (password !== repeatedPassword) {
    //   setError('Error: Passwords do not match');
    //   return;
    // }

    try {
      setIsLoading(true);
      const u = await registerRequest(name, email, password, repeatedPassword);

      if (u.status && u.status === 'success') {
        console.log(`Response success : ${u.status}`);
        setIsAuthenticated(true);
        setUser(u);
        setIsLoading(false);
      } else {
        console.log(`Response fail :  ${u.status} ${u.message}`);
        setIsLoading(false);
        setError(u.message);
        setIsAuthenticated(false);
      }
    } catch (e) {
      setIsLoading(false);
      setError(e);
      setIsAuthenticated(false);
      console.log(`OuterError: ${e}`);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
