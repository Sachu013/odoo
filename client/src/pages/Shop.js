import React, { useEffect, useState } from "react";
import api from "../api"; // axios instance with baseURL
import ProductCard from "../components/ProductCard";
import './Shop.css'; // Your CSS file with styles similar to ReWear

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="shop-container">
      <h2>Shop Our Collection</h2>
      <div className="product-grid">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default Shop;
