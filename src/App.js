import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ThemeProvider } from "./context/ThemeContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <Header />
            <main className="min-h-[80vh]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;