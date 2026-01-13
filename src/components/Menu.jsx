import React from 'react';
import MenuItem from './MenuItem';

export default function Menu({ menuData, activeCategory, setActiveCategory, onAddToCart, wishlist, onWishlistToggle }) {
  return (
    <section id="menu" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-6">Our Menu</h2>
        <div className="w-20 h-1 bg-amber-700 mx-auto mb-8 rounded-full"></div>        
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('coffee')}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeCategory === 'coffee'
                ? 'bg-amber-900 text-white shadow-lg'
                : 'bg-white text-amber-900 hover:bg-amber-100'
            }`}
          >
            Coffee
          </button>
          <button
            onClick={() => setActiveCategory('pastries')}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeCategory === 'pastries'
                ? 'bg-amber-900 text-white shadow-lg'
                : 'bg-white text-amber-900 hover:bg-amber-100'
            }`}
          >
            Pastries
          </button>
          <button
            onClick={() => setActiveCategory('sandwiches')}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeCategory === 'sandwiches'
                ? 'bg-amber-900 text-white shadow-lg'
                : 'bg-white text-amber-900 hover:bg-amber-100'
            }`}
          >
            Sandwiches
          </button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[activeCategory].map((item) => (
            <MenuItem 
              key={item.id} 
              item={item} 
              onAddToCart={onAddToCart}
              onWishlistToggle={onWishlistToggle}
              isWishlisted={wishlist.some(w => w.id === item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}