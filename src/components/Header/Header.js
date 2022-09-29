import React from 'react';
import logo from '../../images/bnw.jpg';
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <img className='logo' src={logo} alt=""/>
            <div>
                <a href="/shop">Movie Club</a>
            </div>
        </nav>
    );
};

export default Header;