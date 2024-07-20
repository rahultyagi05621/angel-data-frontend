// src/Mycomponents/Navbar.js
import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Angel Data</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/work-details">Work Details</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
