import React, { useContext } from "react";
import { StateContext, DispatchContext } from "../context/AppProvider";
import { Link } from "react-router-dom";

const AddToCartItems = ({ closeAddToCart }) => {
  const { cart } = useContext(StateContext); 
  const dispatch = useContext(DispatchContext);

  const showAddToCartElements = cart.map((item, index) => ( 
    <li className="cart-list" key={index}>
      <i
        className="fa-regular fa-circle-xmark icon"
        onClick={() => dispatch({ type: 'remove_From_cart', payload: item.title })}
      ></i>
      <img src={item.img} alt={item.title} />
      <h5>{item.title}</h5>
      <Link className='link' to="/checkout"><button className='checkout-btn'>Checkout</button></Link>
    </li>
  ));

  return (
    <div className="add-to-cart">
      <h1>Cart Items</h1>
      <div className="add-to-cart-content">
        <ul className="cart-container">{showAddToCartElements}</ul>
      </div>
      {/* <button className="cart-btn" onClick={closeAddToCart}>
        Close
      </button> */}
    </div>
  );
};

export default AddToCartItems;