import React from "react";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <Header />
          <main className="min-h-[80vh]">
            <Home />
          </main>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
