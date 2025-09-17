import React from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./ProductCard.css";

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="product-card border rounded-lg shadow-md p-4 flex flex-col bg-white hover:shadow-lg transition duration-300">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />

      {/* Product Info */}
      <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.name}</h3>
      <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
      <p className="text-xl font-bold text-purple-600 mb-4">${product.price}</p>

      {/* Actions */}
      <div className="flex justify-between mt-auto space-x-2">
        <button
          onClick={() => addToCart(product)}
          className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition"
        >
          Wishlist
        </button>
      </div>

      {/* QuickView Button */}
      <button
        onClick={onQuickView}
        className="mt-3 w-full bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition"
      >
        Quick View
      </button>
    </div>
  );
};

export default ProductCard;