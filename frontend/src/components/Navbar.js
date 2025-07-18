import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-content">
                <img src={logo} alt="Institute Logo" className="navbar-logo" />
                <h1 className="navbar-title">Bihar Institute of Public Administration and Rural Development</h1>
            </div>
        </header>
    );
}

export default Navbar;