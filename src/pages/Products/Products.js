import React, { useState } from "react";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import QuickView from "../../components/QuickView/QuickView";
import { useCart } from "../../context/CartContext";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <div key={product.id} onClick={() => setSelectedProduct(product)}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>

      {/* QuickView modal */}
      <QuickView
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;