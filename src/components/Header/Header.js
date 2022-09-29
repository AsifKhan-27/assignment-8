import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            {/* <img src={logo} alt=""/> */}
            <div>
                <a href="/shop">Movie Club</a>
            </div>
        </nav>
    );
};

export default Header;