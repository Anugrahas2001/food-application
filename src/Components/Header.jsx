import React from 'react'

function Header() {
  return (
    <div className="root">
      <div className='navBar'>
      <div className='navBar-category'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Order</li>
        <li>Wishlist</li>
      </ul>
      </div>
      <div className='navBar-icons'>
        <img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"/>
      </div>
    </div>
    </div>
  )
}

export default Header
