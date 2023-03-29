import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <div className="nav-wrapper">
            <Link to={'/'} className="brand-logo">MHC</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={'/library'}>Library</Link></li>
            <li><Link to={'/pages'}>About Us</Link></li>
        </ul>
        </div>
    </nav>
)

export default Header;