import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="root">
      <div className='navBar'>
      <div className='navBar-icons'>
        <img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"/>
      </div>
      <div className='navBar-category'>
      <ul>
        <li><Link className='link' to="/">Home</Link></li>
       <li> <Link className='link' to="/cart">Cart</Link></li>
        <li><Link className='link' to="/checkout">Checkout</Link></li>
      </ul>
      </div>
    </div>
    </div>
  )
}

export default Header
