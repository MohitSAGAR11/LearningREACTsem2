import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar">
        <a href="#" class="logo">Brand</a>
        <ul id="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div class="hamburger" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    );
};

export default Navbar;