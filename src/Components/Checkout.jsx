import React, { useContext } from 'react';
import { StateContext } from '../context/AppProvider';

const Checkout = () => {
  const cartItems = useContext(StateContext);


  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const shippingPrice = getRandomValue(5, 10);

  let totalPrice = 0;
  const itemsInCheckOut = cartItems.cart.map((item, index) => {
    const randomPrice = getRandomValue(100, 500);
    totalPrice += randomPrice;
    return (
      <li className='checkout-main-sub' key={index}>
        <div className='item'>
        <img className='checkout-image' src={item.img} alt={item.title} />
        <h5 className='checkout-heading'>{item.title}</h5>
        <span className='amount'>{randomPrice}</span>
        </div>
      </li>
    );
  });

  const taxPrice = getRandomValue(10, 400);
  const allTotalPrice = totalPrice + taxPrice;

  return (
    <div className='checkout'>
      <div className='checkout-container'>

<h1>Your Order</h1>
<div className='checkout-container-one'>
    <span className='product-total'>Product </span>
    <span className='total-amount'> Price</span>
  </div>
  <div className='checkout-container-two'>
  <ul className='checkout-main'>
    {itemsInCheckOut}
  </ul>
  </div>
  <div className='checkout-container-three'>
    <div className='price-section'>
      <span>SubTotal:</span>
      <span>{totalPrice}</span>
    </div>
    <div className='price-section'>
      <span>Tax:</span>
      <span>{taxPrice}</span>
    </div>
    <div className='price-section-total'>
      <span>Total Price:</span>
      <span>Rs.{allTotalPrice}</span>
    </div>
  </div>
  <div className='terms-conditions'>
    <input type='checkbox' id='terms' name='terms' />
    <label htmlFor='terms'> I have read and agree to the website <a href='#'>terms and conditions</a></label>
  </div>
  <button className='place-order-btn'>Place Order</button>
      </div>
</div>
  );
};

export default Checkout;
