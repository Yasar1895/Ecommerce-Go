import React from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const Header = () => {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ShopHub</h1>
      <nav className="space-x-4">
        <span>Wishlist ({wishlist.length})</span>
        <span>Cart ({cartItems.length})</span>
      </nav>
    </header>
  );
};

export default Header;
