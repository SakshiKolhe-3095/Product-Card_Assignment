import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, description, price, imageUrl, onAddToCart }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col transform hover:scale-105">
      <Link to={`/product/${id}`}>
        <img
          src={imageUrl}
          alt={name}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-lg text-blue-700 dark:text-blue-300">
            ₹{price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart({ id, name, price, imageUrl })}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            aria-label={`Add ${name} to cart`}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
