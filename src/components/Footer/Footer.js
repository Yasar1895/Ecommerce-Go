// src/components/Footer/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <h2 className="text-xl font-semibold text-white mb-4 md:mb-0">
          ShopHub
        </h2>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/products" className="hover:text-white">Products</Link>
          <Link to="/checkout" className="hover:text-white">Checkout</Link>
        </nav>

        {/* Copy */}
        <p className="text-sm">&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;