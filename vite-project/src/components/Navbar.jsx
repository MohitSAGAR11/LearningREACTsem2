import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const [user, setUser] = useState(null); // Fixed 'connst' typo to 'const'

    console.log(isLoggedIn);
    console.log(user);

    const toggleMenu = () => {
        setIsLoggedin(prevState => !prevState);
        setUser(user ? null : { name: 'Vimal', age: 20 });
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">Amazon</div>
            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Search for products"
                    className="search-input"
                />
                <button className="search-button">Search</button>
            </div>
            <div className="navbar-links">
                <a href="#deals" className="nav-link">
                    Today's Deals
                </a>
                <a href="#cart" className="nav-link">
                    Cart
                </a>
                {isLoggedIn ? (
                    <span>{user?.name}</span> 
                ) : (
                    <button onClick={toggleMenu} className="nav-login-button">Sign in</button> 
                )}
            </div>
        </div>
    );
};

export default Navbar;
