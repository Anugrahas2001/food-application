import React from "react";

const AddToCartItems = ({addToCartItem,closeAddToCart}) => {
    
  return (
    <div className="add-to-cart">
      <h1>Cart Items</h1>
      <div className="add-to-cart-content">
        <img src={addToCartItem} alt="" />
        <h5>ItemName</h5>
      </div>
      <button className="cart-btn" onClick={closeAddToCart}>close</button>
    </div>
  );
};

export default AddToCartItems;
