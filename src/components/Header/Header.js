// src/components/Header/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./Header.css";

const Header = () => {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:opacity-80 transition">
          ShopHub
        </Link>
      </h1>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/checkout" className="hover:underline">Checkout</Link>
        <span className="cursor-pointer">Wishlist ({wishlist.length})</span>
        <span className="cursor-pointer">Cart ({cartItems.length})</span>
      </nav>
    </header>
  );
};

export default Header;
