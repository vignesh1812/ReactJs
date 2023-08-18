import React from 'react';
import './header.css';
import logo from "./logo.png"
const Header = () => {
  return (
    <div className="header ">
    <div className="navbar bg-dark">
    <div className="nav logo">
        <img src={logo} alt="techvoxlogo" height={30} width={30} id='logo' 
         />
        <span>Tech vox</span>
    </div>
        <ul className='nav' id='nav'>
            <li className='nav-items'><a className='nav-link' href="/">Home</a></li>
            <li className='nav-items'><a className='nav-link' href="/">About</a></li>
            <li className='nav-items'><a className='nav-link' href="/">Services</a></li>
            <li className='nav-items'><a className='nav-link' href="/">Contact</a></li>
        </ul>
    </div>
</div>
    
  );
}

export default Header