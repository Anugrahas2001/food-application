import React from "react";

const AddToCartItems = ({
  addToCartItem,
  closeAddToCart,
  removeItemFromCart,
}) => {
  let showAddToCartElements = addToCartItem.map((item) => {
    if (item.img) {
      return (
        <li key={item.title}>
          <i
            className="fa-regular fa-circle-xmark icon"
            onClick={() => {
              removeItemFromCart(item.title);
            }}
          ></i>
          <img src={item.img} alt="" />
          <h5>{item.title}</h5>
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="add-to-cart">
      <h1>Cart Items</h1>
      <div className="add-to-cart-content">
        <ul>{showAddToCartElements}</ul>
      </div>
      <button className="cart-btn" onClick={closeAddToCart}>
        close
      </button>
    </div>
  );
};

export default AddToCartItems;