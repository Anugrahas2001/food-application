import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="root">
      <div className='navBar'>
      <div className='navBar-icons'>
        <img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"/>
      </div>
      <div className='navBar-category'>
      <ul>
      <li><i class="fas fa-search"></i></li>
        <li><Link className='link' to="/"><i class="fas fa-home"></i></Link></li>
       <li> <Link className='link' to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link></li>
        <li><Link className='link' to="/checkout"><i class="fas fa-shopping-bag"></i></Link></li>
        <li> <img  src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_640.jpg"  alt="profile" className='profile' /></li>
        <li><Link className='link' to="/login">LogIn</Link></li>
        <li className="dropdown">
              <Link className='link' onClick={toggleDropdown}> <i class="fa-solid fa-chevron-down"></i></Link>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/profile">Profile</Link>
                  <Link className="dropdown-item" to="/logout">Logout</Link>
                </div>
              )}
            </li>
      </ul>
      </div>
    </div>
    </div>
  )
}

export default Header
