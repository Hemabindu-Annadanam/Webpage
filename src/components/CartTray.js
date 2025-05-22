import React, { useEffect, useState } from 'react';
import {   Button, Card,  Container } from 'react-bootstrap';
import './CartTray.css';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

// const CartTray = ({ show, onClose,onAddToCart  }) => {
  // const [cartItems, setCartItems] = useState([]);
  //     const totalPrice = cartItems.reduce(
  //   (sum, item) => sum + (item.price * (item.quantity || 1)),
  //   0
  //   );
  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  //   setCartItems(Array.isArray(storedCart) ? storedCart : []);
  // }, [show]);
  // const updateCart = (newItems) => {
  //   setCartItems(newItems);
  //   localStorage.setItem('cart', JSON.stringify(newItems));
  //   onAddToCart()
  // };

//   const increment = (index) => {
//     const updated = [...cartItems];
//     updated[index].quantity = (updated[index].quantity || 1) + 1;
//     updateCart(updated);
//   };

//   const decrement = (index) => {
//     const updated = [...cartItems];
//     if ((updated[index].quantity || 1) > 1) {
//       updated[index].quantity -= 1;
//       updateCart(updated);
//     }
//   };

//   const removeItem = (index) => {
//     const updated = [...cartItems];
//     updated.splice(index, 1);
//     updateCart(updated);
    
//   };

//   const trayWidth = Math.min(500, 300 + cartItems.length * 20);

//   return (
//     <div
//       className={`cart-tray ${show ? 'open pt-5' : ''}`}
//       style={{ width: trayWidth }}
//     >
//       <div className="cart-header d-flex justify-content-between align-items-center">
//         <h5 className="mb-0">Shopping Cart</h5>
//         <button className="btn btn-sm btn-light" onClick={onClose}>×</button>
//       </div>
//       <div className="cart-body">
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cartItems.map((item, index) => (
//             <div key={index} className="cart-item d-flex align-items-center mb-3">
//               <img src={item.image} alt={item.title} />
//               <div className="flex-grow-1 ms-2">
//                 <p className="mb-1 fw-bold">{item.title}</p>
//                 <p className="mb-1  fw-bold">${item.price.toFixed(2)}</p>
//                 <div className="d-flex align-items-center gap-2">
//                   <button className="btn btn-sm btn-field" onClick={() => decrement(index)}>-</button>
//                   <span>{item.quantity || 1}</span>
//                   <button className="btn btn-sm btn-field" onClick={() => increment(index)}>+</button>
//                   <button className="btn btn-sm btn-danger ms-2" onClick={() => removeItem(index)}>Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="cart-footer border-top p-2">
//          <div className="d-flex justify-content-end gap-2n"> 
//          <span >
//           <strong>Total:</strong>
//           ${totalPrice.toFixed(2)}</span>
//          </div> 
//         </div>
//     </div>
//   );
// };

const CartTray = ({onAddToCartTray}) => {
    const [cartItems, setCartItems] = useState([]);
         const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price * (item.quantity || 1)),
    0
    );
      useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(Array.isArray(storedCart) ? storedCart : []);
      }, []);
    const onEmptyCart = () => {
      if(cartItems.length === 0 ){
           toast.warn('Your Cart is Empty!');
      }
      else{
        if (window.confirm('Are you sure you want to empty the cart?')) {
        localStorage.removeItem('cart');
        window.location.reload();
      }
      }
    };
    const updateCart = (newItems) => {
    setCartItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
    onAddToCartTray()
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
return(
  <div className='pt-4'>
    <div className='px-2 pt-5'>
      <h3 className='px-5'>Shopping Cart</h3>
      <hr/>
    </div>
    <div className="d-flex justify-content-center cart-page-wrapper">
       <Container className="d-flex align-items-start shopping-cart-container ">
      <Card style={{flex:1, width: '100%', maxWidth: '700px'}}>
        <Card.Header className="d-flex justify-content-between align-items-center card-header">
           <Link to="/Webpage/products" variant="light" size="sm" className="mb-0 continue-button"> Continue Shopping</Link>
           <Link variant="light" size="sm" onClick={onEmptyCart} className="mb-0 empty-button">Empty Cart</Link>
        </Card.Header>
        <Card.Body>
           {cartItems.length === 0 ? (
          <p><b>Your shopping cart is empty.</b></p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item-container position-relative mb-3" key={index}>
                <div  className="cart-item d-flex align-items-center mb-3">
              <img src={item.image} alt={item.title} />
              <div className="flex-grow-1 ms-2">
                <p className="mb-1 fw-bold">{item.title}</p>
                <p className="mb-1  fw-bold">${item.price.toFixed(2)}</p>
                <div className="d-flex align-items-center gap-2">
                   <div className="quantity-box d-flex align-items-center justify-content-between">
                         {item.quantity > 1 ? (
                                <span className="quantity-control" onClick={() => decrement(index)}>-</span>
                              ) : (
                                <span className="quantity-control text-danger" onClick={() => removeItem(index)} title="Delete Item"
                                            style={{ cursor: 'pointer' }}>
                                      <FaTrashAlt />
                                </span>
                              )}
                        <span className="quantity-value">{item.quantity || 1}</span>
                        <span className="quantity-control" onClick={() => increment(index)}>+</span>
                   </div>
                </div>
              </div>
            </div>
               {index < cartItems.length - 1 && <hr className="full-width-divider" />}
            </div>
          )
        ))}
        </Card.Body>
         <Card.Footer className="d-flex justify-content-end">
              <strong>Sub Total:&nbsp; ${totalPrice.toFixed(2)}</strong>
            </Card.Footer>
           
      </Card>
      {cartItems.length === 0?(
          <div/>
      ):(
         <Card className="proceed-card sticky-card" style={{ width: '300px', height: 'fit-content' }}>
        <Card.Body className="text-center">
          <span className='fw-100'>Ready to Secure Checkout?</span>
          <h4 className='pt-2'>Cart Sub Total: ${totalPrice.toFixed(2)}</h4>
          <Button className="btn-color w-100 mt-2 ">Proceed</Button>
        </Card.Body>
      </Card>
      )}
     
       </Container>
     
    </div>
    
  </div>
)}
export default CartTray;
