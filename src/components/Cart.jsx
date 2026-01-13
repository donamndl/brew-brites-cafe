import React, { useState } from 'react';
import { X, ShoppingCart, MapPin } from 'lucide-react'; // Added MapPin icon
import { orderAPI } from '../services/api';

export default function Cart({ cart, setCart, isOpen, setIsOpen }) {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    setLoading(true);
    try {
      const orderData = {
        customer_name: customerName,
        customer_email: customerEmail,
        delivery_address: {
          street: address,
          city: city,
          zip: zipCode
        },
        items: cart.map(item => ({
          name: item.name,
          price: item.price,
          quantity: 1
        })),
        total: total
      };

      const response = await orderAPI.create(orderData);

      if (response.success) {
        setOrderSuccess(true);
        setCart([]);
        // Clear form
        setCustomerName('');
        setCustomerEmail('');
        setAddress('');
        setCity('');
        setZipCode('');
        
        setTimeout(() => {
          setOrderSuccess(false);
          setIsOpen(false);
        }, 4000);
      }
    } catch (error) {
      alert('Error creating order: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 bg-amber-900 text-white p-6 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Your Order</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-amber-800 p-1 rounded-full transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {orderSuccess ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Order Received!</h3>
              <p className="text-gray-600">Thank you, {customerName}. We're preparing your brew!</p>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <button onClick={() => setIsOpen(false)} className="mt-4 text-amber-800 font-semibold underline">Go back to menu</button>
            </div>
          ) : (
            <>
              {/* List of Items */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-bold text-amber-900 border-b pb-2">Items</h3>
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeFromCart(index)} className="text-red-400 hover:text-red-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 text-xl font-bold text-amber-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleCheckout} className="space-y-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold border-b pb-2">
                   <MapPin className="w-5 h-5" />
                   <h3>Delivery Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text" required value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email" required value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Street Address</label>
                  <input
                    type="text" required value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    placeholder="123 Coffee Lane"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
                    <input
                      type="text" required value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Zip Code</label>
                    <input
                      type="text" required value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-900 text-white py-4 rounded-lg hover:bg-amber-800 transition-all font-bold text-lg shadow-lg disabled:opacity-50"
                >
                  {loading ? 'Processing...' : `Place Order • $${total.toFixed(2)}`}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}