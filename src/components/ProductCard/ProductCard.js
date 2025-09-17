import React from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <div className="mt-2 flex justify-between">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
