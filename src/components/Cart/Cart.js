import React from "react";
import { useCart } from "../../context/CartContext";
import "./Cart.css"; // Import CSS

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;