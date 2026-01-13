import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { menuData } from './data/menuData';
import Wishlist from './components/Wishlist';
import './App.css';
import Cart from './components/Cart';


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const toggleWishlist = (item) => {
    if (wishlist.find(i => i.id === item.id)) {
      // If it's already there, remove it
      setWishlist(wishlist.filter(i => i.id !== item.id));
    } else {
      // If it's not there, add it
      setWishlist([...wishlist, item]);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
      />
      <Cart
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />
      {/* 5. Wishlist Component (Popup) */}
      <Wishlist 
        isOpen={isWishlistOpen} 
        setIsOpen={setIsWishlistOpen} 
        wishlist={wishlist}
        onAddToCart={addToCart}
      />
      <Hero />
      <Menu
        menuData={menuData}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onAddToCart={addToCart}
        wishlist={wishlist}
        onWishlistToggle={toggleWishlist}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;