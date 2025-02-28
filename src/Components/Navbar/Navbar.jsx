import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <h1>Paul Donovan</h1>
        </div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
<div className="line"></div>
<div className="line"></div>
<div className="line"></div>

      </div>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
<li><NavLink className="navbar-menu" onClick={toggleMenu} to="/">Home</NavLink></li>
<li><NavLink className="navbar-menu" to="/articles" onClick={toggleMenu}>Articles</NavLink></li>
<li><NavLink className="navbar-menu" to="/products" onClick={toggleMenu}>Products</NavLink></li>
<li><NavLink className="navbar-menu" to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
