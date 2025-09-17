import React from "react";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="text-right font-bold mt-4">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button
            onClick={() => {
              alert("Checkout successful!");
              clearCart();
            }}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
