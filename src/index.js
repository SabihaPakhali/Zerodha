import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import axios from "axios";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import ProtectedRoute from "./ProtectedRoute";
import server from "./environment"; // Import API base URL

// Axios Default Configuration
axios.defaults.baseURL = server; // Set backend API base URL
axios.defaults.withCredentials = true; // Allow cookies for authentication

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />

      {/* Protected Route */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Navigate to="http://localhost:3001" />
          </ProtectedRoute>
        }
      />

      {/* Catch-all for NotFound */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
