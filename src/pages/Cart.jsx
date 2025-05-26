import React from "react";

const Cart = ({ items, onRemove, onIncrease, onDecrease }) => {
  if (items.length === 0) {
    return <p className="text-center mt-8">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between mb-4 border p-4 rounded shadow">
            <div className="flex items-center space-x-4">
              <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                <p className="text-gray-700">Price: ₹{item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onDecrease(item.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                aria-label={`Decrease quantity of ${item.name}`}
              >
                -
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                onClick={() => onIncrease(item.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
              <button
                onClick={() => onRemove(item.id)}
                className="ml-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                aria-label={`Remove ${item.name} from cart`}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
