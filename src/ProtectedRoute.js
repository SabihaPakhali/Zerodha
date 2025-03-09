import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user"); // Example condition

  if (!isAuthenticated) {
    return <Navigate to="/signup" />;
  }

  // Redirect to Dashboard App
  window.location.href = "http://localhost:3001/dashboard"; // Fixed missing quote
  return null; // Return null to avoid rendering anything
};

export default ProtectedRoute;
