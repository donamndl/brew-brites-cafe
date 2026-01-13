import React from 'react';
import { Coffee, Heart } from 'lucide-react';

export default function MenuItem({ item, onAddToCart, onWishlistToggle, isWishlisted }) {
  return (
    /* 1. Added: transform hover:-translate-y-2 duration-300 and changed to shadow-2xl */
    <div className="relative group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-amber-100 flex flex-col">
      
      {/* WISHLIST BUTTON */}
      <button
        onClick={() => onWishlistToggle(item)}
        className={`absolute top-4 right-4 z-20 p-2.5 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 active:scale-95 ${
          isWishlisted 
            ? 'bg-red-50 text-red-500' 
            : 'bg-white/90 text-gray-400 hover:text-red-400'
        }`}
        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        <Heart
          className={`w-5 h-5 transition-colors ${isWishlisted ? 'fill-current' : ''}`}
        />
      </button>

      {/* IMAGE SECTION - Cleaned up redundant divs */}
      <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            /* 2. Added: group-hover:scale-110 duration-500 */
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

      <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>

      <button
        onClick={() => onAddToCart(item)}
        className="w-full bg-amber-900 text-white py-3 rounded-lg hover:bg-amber-800 transition-all font-bold shadow-md active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  );
}