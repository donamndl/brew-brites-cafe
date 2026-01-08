import React from 'react';
import { Coffee } from 'lucide-react';

export default function MenuItem({ item, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-amber-100">
      {/* Image - Replace with real image */}
      <div className="w-full h-48 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Coffee className="w-16 h-16 text-amber-900 opacity-30" />
        )}
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
        <span className="text-lg font-semibold text-green-700">
          ${item.price.toFixed(2)}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{item.description}</p>
      
      <button
        onClick={() => onAddToCart(item)}
        className="w-full bg-amber-900 text-white py-2 rounded-lg hover:bg-amber-800 transition font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}