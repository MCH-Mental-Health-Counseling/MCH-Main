import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <ul>
            <li><Link to={'/library'}>Library</Link></li>
            <li><Link to={'/pages'}>About Us</Link></li>
        </ul>
    </nav>
)

export default Header;