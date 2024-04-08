import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickGetTicket = () => {
    // Perform any necessary actions before navigating, if needed
    // For example, you can close the menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // You can navigate to the booking page using react-router-dom's Link
    // The 'to' attribute specifies the URL path to navigate to
    // Change '/booking' to the actual path of your booking page
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
          <li>
            <Link to="/faqs">FAQ's</Link>
          </li>
          <li>
            <Link to="/past-events">Past Events</Link>
          </li>
          {/* Add onClick event to trigger the handleClickGetTicket function */}
          <li>
            <Link to="/booking" className="book-button" onClick={handleClickGetTicket}>
              Get Ticket!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
