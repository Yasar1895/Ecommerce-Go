import React from "react";
import "./Footer.css"; // Import CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>© 2025 ShopHub. All rights reserved.</p>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/checkout">Checkout</a>
      </div>
    </footer>
  );
};

export default Footer;