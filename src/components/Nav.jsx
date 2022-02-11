import React from 'react';
import Logo from '../img/New Logo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom'; 


function Nav({onSearch}) {
  return (
    <nav className="general">
    <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="logo" alt="" />
          <p className='title'>Weather App</p>
        </span>
    </Link>

    <Link to= '/about'>
    <span className='about'>About</span>
    </Link>
    <div className='search'>
        <SearchBar
          onSearch={onSearch}
        />
      </div>
    </nav>
  );
};

export default Nav;
