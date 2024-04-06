import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="./festival logo.png" alt="Logo" />
        </Link>
        <button className="navbar-toggler" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">Partners</Link>
          </li>
          <li>
            <Link to="/menu">About</Link>
          </li>
          <li>
            <Link to="/contact">Past Events</Link>
          </li>
          <li>
            <Link to="/booking" className="book-button">
              Get Ticket!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
