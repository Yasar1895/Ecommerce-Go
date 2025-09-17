import React from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./QuickView.css";

const QuickView = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4"
        />

        {/* Product Info */}
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-purple-600 mb-6">${product.price}</p>

        {/* Action Buttons */}
        <div className="flex justify-between space-x-3">
          <button
            onClick={() => {
              addToCart(product);
              onClose();
            }}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addToWishlist(product);
              onClose();
            }}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickView;