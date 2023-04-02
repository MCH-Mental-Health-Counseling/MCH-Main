import React from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './chatbot/Chatbot';

const Header = (props) => (
    <div>
        <nav>
            <div className="nav-wrapper blue">
                <Link to={'/'} className="brand-logo">MHC</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={'/library'}>Library</Link></li>
                    <li><Link to={'/pages'}>About Us</Link></li>
                </ul>
            </div>
        </nav>
        <div>{props.children}</div>

        <Chatbot />
    </div>
)

export default Header;