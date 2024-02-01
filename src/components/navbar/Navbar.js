import React from 'react';
import './Navbar.css';
import logo from '../images/navlogo.png'
export default function Navbar({handlePages}) {

    return (
        <div className="navbar-container">
            <img className="logo-img" src={logo} alt="Logo" />
            <div className='container-navitems'>
                <div className="menu-item" onClick={() => handlePages('home')}>
                    <div className="menu-dot">
                        <div className="menu-dot-line" />
                    </div>
                    <div className='menu-text'>
                        Home
                    </div>
                    <div className="menu-icon-container">
                        <div className="menu-icon-line" />
                        <div className="menu-icon-line-rotated" />
                    </div>
                </div>
                <div className="menu-item"onClick={() => handlePages('Services')}>
                    <div className="menu-dot">
                        <div className="menu-dot-line" />
                    </div>
                    <div className='menu-text'>
                        Services
                    </div>
                    <div className="menu-icon-container">
                        <div className="menu-icon-line" />
                        <div className="menu-icon-line-rotated" />
                    </div>
                </div>
                <div className="menu-item" onClick={() => handlePages('Solutions')}>
                    <div className="menu-dot">
                        <div className="menu-dot-line" />
                    </div>
                    <div className='menu-text'>
                        Solutions
                    </div>
                    <div className="menu-icon-container">
                        <div className="menu-icon-line" />
                        <div className="menu-icon-line-rotated" />
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-dot">
                        <div className="menu-dot-line" />
                    </div>
                    <div className='menu-text'>
                        Lorem
                    </div>
                    <div className="menu-icon-container">
                        <div className="menu-icon-line" />
                        <div className="menu-icon-line-rotated" />
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-dot">
                        <div className="menu-dot-line" />
                    </div>
                    <div className='menu-text'>
                        Lorem
                    </div>
                    <div className="menu-icon-container">
                        <div className="menu-icon-line" />
                        <div className="menu-icon-line-rotated" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}
