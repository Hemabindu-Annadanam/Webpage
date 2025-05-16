import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartTray.css';

const CartTray = ({ show, onClose,onAddToCart  }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(Array.isArray(storedCart) ? storedCart : []);
  }, [show]);
  const updateCart = (newItems) => {
    setCartItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
    onAddToCart()
  };

  const increment = (index) => {
    const updated = [...cartItems];
    updated[index].quantity = (updated[index].quantity || 1) + 1;
    updateCart(updated);
  };

  const decrement = (index) => {
    const updated = [...cartItems];
    if ((updated[index].quantity || 1) > 1) {
      updated[index].quantity -= 1;
      updateCart(updated);
    }
  };

  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    updateCart(updated);
    
  };

  const trayWidth = Math.min(500, 300 + cartItems.length * 20);

  return (
    <div
      className={`cart-tray ${show ? 'open pt-5' : ''}`}
      style={{ width: trayWidth }}
    >
      <div className="cart-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Shopping Cart</h5>
        <button className="btn btn-sm btn-light" onClick={onClose}>×</button>
      </div>
      <div className="cart-body">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item d-flex align-items-center mb-3">
              <img src={item.image} alt={item.title} />
              <div className="flex-grow-1 ms-2">
                <p className="mb-1 fw-bold">{item.title}</p>
                <p className="mb-1  fw-bold">${item.price.toFixed(2)}</p>
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-sm btn-field" onClick={() => decrement(index)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button className="btn btn-sm btn-field" onClick={() => increment(index)}>+</button>
                  <button className="btn btn-sm btn-danger ms-2" onClick={() => removeItem(index)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
       <div>
    </div>
    </div>
  );
};

export default CartTray;
