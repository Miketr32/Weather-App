import React from 'react';
import Logo from '../img/Glitch logo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom'; 


function Nav({onSearch}) {
  return (
    <nav className="general">
    <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="logo" alt="" />
Weather App
        </span>
    </Link>

    <Link to= '/about'>
    <span>About</span>
    </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
