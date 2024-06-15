import React, { useContext, useState } from 'react';
import { StateContext } from '../context/AppProvider';
import Address from './Address'

const Checkout = () => {
  const cartItems = useContext(StateContext);
  const [addresses, setAddresses] = useState([
    {
      name: 'Anugraha S',
      phone: '7306634251',
      address: 'Kunduparambu House West Thara Kuthanur, Palakkad, Kerala',
      pin: '678721',
    },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const addNewAddress = (newAddress) => {
    if (editingAddress !== null) {
      setAddresses(addresses.map((addr, index) => (index === editingAddress ? newAddress : addr)));
      setEditingAddress(null);
    } else {
      setAddresses([...addresses, newAddress]);
    }
    setIsFormVisible(false);
  };

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

  const taxPrice = getRandomValue(10, 300);
  const allTotalPrice = totalPrice + taxPrice;

  const handleEditAddress = (index) => {
    setEditingAddress(index);
    setIsFormVisible(true);
  };

  const handleDeleteAddress = (index) => {
    setAddresses(addresses.filter((_, addrIndex) => addrIndex !== index));
  };

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

      <div className="main-address">
        {addresses.map((addr, index) => (
          <div className='address' key={index}>
            <h2>{addr.name}</h2>
            <h3>{addr.phone}</h3>
            <h3>{addr.address}</h3>
            <h3>Pin: {addr.pin}</h3>
           
            <button className='edit' onClick={() => handleEditAddress(index)}>Edit</button>
            <button className='delete' onClick={() => handleDeleteAddress(index)}>Delete</button>
            
          </div>
        ))}
        <button className='add-address-btn' onClick={() => setIsFormVisible(true)}>
          <i className="fa-solid fa-plus icon"></i> Add Address
        </button>
      </div>

      {isFormVisible && (
        <Address 
          onClose={() => {
            setIsFormVisible(false);
            setEditingAddress(null);
          }}
          onSave={addNewAddress}
          address={editingAddress !== null ? addresses[editingAddress] : null}
        />
      )}
    </div>
  );
};

export default Checkout;
