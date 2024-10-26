import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Function to log in the user, store token, and user details
  const login = (userName, jwtToken) => {
    setName(userName);
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("userName", userName);
  };

  // Function to log out the user and clear token and user details
  const logout = () => {
    setName("");
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
  };

  // Function to automatically load the user data if a token is present in local storage
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedToken = localStorage.getItem("token");
    if (storedName && storedToken) {
      setName(storedName);
      setToken(storedToken);
    }
  }, []);

  return (
    <UserContext.Provider value={{ name, setName, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

