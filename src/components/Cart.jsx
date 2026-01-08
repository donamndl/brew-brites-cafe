import React, { useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { orderAPI } from '../services/api';

export default function Cart({ cart, setCart, isOpen, setIsOpen }) {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
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
        items: cart.map(item => ({
          id: item._id,
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
        setCustomerName('');
        setCustomerEmail('');
        
        setTimeout(() => {
          setOrderSuccess(false);
          setIsOpen(false);
        }, 3000);
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
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-amber-900 text-white p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Your Cart</h2>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {orderSuccess ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Order Placed Successfully!
              </h3>
              <p className="text-gray-600">
                We'll send you a confirmation email shortly.
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b pb-4">
                        <div>
                          <h3 className="font-semibold text-amber-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-green-700">
                            ${parseFloat(item.price).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-green-700">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Checkout Form */}
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-amber-900 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-amber-900 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-amber-900 text-white py-3 rounded-lg hover:bg-amber-800 transition font-semibold disabled:opacity-50"
                    >
                      {loading ? 'Processing...' : 'Place Order'}
                    </button>
                  </form>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}