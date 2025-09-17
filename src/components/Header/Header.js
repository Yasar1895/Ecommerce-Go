import React from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./Header.css"; // Import CSS

const Header = () => {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="header-container">
      <h1 className="header-logo">ShopHub</h1>
      <nav className="nav-links">
        <span>Wishlist ({wishlist.length})</span>
        <span className="cart-icon">Cart ({cartItems.length})</span>
      </nav>
    </header>
  );
};

export default Header;