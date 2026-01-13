import React from 'react';
import { Coffee, X, ShoppingCart, Menu, Heart } from 'lucide-react';

export default function Header({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  cartCount, 
  onCartClick, 
  wishlistCount, 
  onWishlistClick  
}) {
  return (
    <header className="bg-gradient-to-r from-amber-900 to-amber-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo and Brand Section */}
          <div className="flex items-center gap-4">
            <img
              src="/images/brew-bites-logo.png"
              alt="Brew & Bites Logo"
              className="w-14 h-14 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold text-white tracking-wide">
                Brew &{" "}
                <span
                  className="text-amber-300"
                  style={{ fontFamily: "Pacifico, cursive", fontWeight: 400 }}
                >
                  Bites
                </span>
              </span>
              <span className="text-sm text-amber-200 tracking-wide">
                Crafted Coffee • Freshly Baked • Warm Moments
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="hover:text-amber-200 transition">Menu</a>
            <a href="#about" className="hover:text-amber-200 transition">About</a>
            <a href="#contact" className="hover:text-amber-200 transition">Contact</a>

            {/* Icons Section */}
            <div className="flex items-center gap-4">
              
              {/* WISHLIST BUTTON */}
              <button
                onClick={onWishlistClick}
                className="relative hover:text-amber-200 transition p-1"
                aria-label="View Wishlist"
              >
                <Heart className="w-6 h-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-amber-900">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* CART BUTTON */}
              <button
                onClick={onCartClick}
                className="relative hover:text-amber-200 transition p-1"
                aria-label="View Cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-amber-900">
                    {cartCount}
                  </span>
                )}
              </button>

            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#menu" className="hover:text-amber-200 transition">Menu</a>
            <a href="#about" className="hover:text-amber-200 transition">About</a>
            <a href="#contact" className="hover:text-amber-200 transition">Contact</a>
            
            <button
              onClick={() => { onWishlistClick(); setMobileMenuOpen(false); }}
              className="text-left hover:text-amber-200 transition flex items-center gap-2"
            >
              Wishlist ({wishlistCount})
            </button>

            <button
              onClick={() => { onCartClick(); setMobileMenuOpen(false); }}
              className="text-left hover:text-amber-200 transition flex items-center gap-2"
            >
              Cart ({cartCount})
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}