import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Function to log in the user, store token, and user details
  const login = (userName, jwtToken, userEmail) => {
    setName(userName);
    setEmail(userEmail);
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
  };

  // Function to log out the user and clear token and user details
  const logout = () => {
    setName("");
    setEmail("");
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
  };

  // Automatically load the user data if a token is present in local storage
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");
    const storedToken = localStorage.getItem("token");
    if (storedName && storedToken && storedEmail) {
      setName(storedName);
      setEmail(storedEmail);
      setToken(storedToken);
    }
  }, []);

  // // Remove user details from local storage on tab close
  // useEffect(() => {
  //   const handleTabClose = () => {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("userName");
  //     localStorage.removeItem("userEmail");
  //   };

  //   window.addEventListener("beforeunload", handleTabClose);
  //   return () => window.removeEventListener("beforeunload", handleTabClose);
  // }, []);

  return (
    <UserContext.Provider value={{ name, email, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
