import React, { useState } from "react";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import QuickView from "../../components/QuickView/QuickView";
import "./Products.css";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="products-page container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* QuickView Modal */}
      {selectedProduct && (
        <QuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;