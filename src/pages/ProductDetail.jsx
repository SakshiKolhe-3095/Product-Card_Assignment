import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
  const { state } = useLocation();

  if (!state) return <p className="p-4">Product not found.</p>;

  const { id, name, description, price, imageUrl } = state;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover mb-4 rounded" />
      <h2 className="text-3xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-2xl font-semibold text-blue-600">${price.toFixed(2)}</span>
        <div className="flex items-center space-x-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
      <button
        onClick={() => addToCart({ id, name, price, imageUrl })}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
