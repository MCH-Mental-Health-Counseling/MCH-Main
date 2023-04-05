import React from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './chatbot/Chatbot';
import "./Header.scss";

const Header = (props) => {
    return(
    <div className="header_container">
        <nav>
            <div className="nav-wrapper blue">
            <Link to={'/'} className="brand-logo">
                        <img src={require('./Images/Organization Logo.png')} alt='' />
                    </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/library'}>Library</Link></li>
                    <li><Link to={'/pages'}>About Us</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>
            </div>
        </nav>
        <div className='content_block'>{props.children}</div>

        <Chatbot />
    </div>
    )
}

export default Header;