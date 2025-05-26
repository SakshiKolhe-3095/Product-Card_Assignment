import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="font-bold text-2xl hover:text-blue-200"
          aria-label="Go to home page"
        >
          Mechtronix Industries
        </Link>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-blue-200">
            Products
          </Link>
          <Link to="/about" className="hover:text-blue-200">
            About Us
          </Link>
          <Link to="/signup" className="hover:text-blue-200">
            Sign Up
          </Link>
          <Link to="/login" className="hover:text-blue-200">
            Log In
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-blue-200"
            aria-label={`Cart with ${cartCount} items`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 1.293a1 1 0 000 1.414L7 17h10"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;