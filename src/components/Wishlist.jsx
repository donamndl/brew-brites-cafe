import React from 'react';
import { X, Heart, ShoppingCart } from 'lucide-react';

export default function Wishlist({ isOpen, setIsOpen, wishlist, onAddToCart }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-amber-900 flex items-center gap-2">
            <Heart className="fill-red-500 text-red-500" /> Your Wishlist
          </h2>
          <button onClick={() => setIsOpen(false)}><X /></button>
        </div>

        {wishlist.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Your wishlist is empty.</p>
        ) : (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-3">
                   <img src={item.image} className="w-12 h-12 rounded object-cover" />
                   <div>
                     <p className="font-bold">{item.name}</p>
                     <p className="text-sm text-green-700">${item.price}</p>
                   </div>
                </div>
                <button 
                  onClick={() => { onAddToCart(item); setIsOpen(false); }}
                  className="p-2 bg-amber-100 text-amber-900 rounded-full hover:bg-amber-200"
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}