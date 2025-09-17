import React, { useState } from "react";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import QuickView from "../../components/QuickView/QuickView";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} onClick={() => setSelectedProduct(product)}>
          <ProductCard product={product} />
        </div>
      ))}

      <QuickView
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Home;