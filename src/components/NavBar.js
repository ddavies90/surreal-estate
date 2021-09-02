import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="navbar__logo" alt="Surreal Estate logo" />
      </Link>
      <ul className="navbar__links">
        <Link to="/" className="navbar__links-item">
          View Properties
        </Link>
        <Link to="/add-property" className="navbar__links-item">
          Add a Property
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
