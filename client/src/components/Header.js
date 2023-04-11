import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './chatbot/Chatbot';
import "./Header.scss";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.loggedIn !== prevState.loggedIn) {
            console.log("Header refr");
            return { loggedIn: nextProps.loggedIn };
        }
        else return null;
    }
    render() {
        return (
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
                            {/*<li><Link to={'/login'}>Login</Link></li>*/}
                            {/*{islogin ===  true ? ( <li><Link to={'/login'}>Login</Link></li>) : '' "}*/}
                            {this.state.loggedIn ?
                                <>
                                    <li><Link to="/profile">Welcome, {JSON.parse(localStorage.getItem('user'))?.name}</Link></li>
                                    <li><button onClick={this.props.onLogout}>Logout</button></li>
                                </>
                                :
                                <li><Link to="/login">Login</Link></li>
                            }
                        </ul>
                    </div>
                </nav>
                <div className='content_block'>{this.props.children}</div>

                <Chatbot loggedIn={this.state.loggedIn}/>
            </div>
        )
    }
}

export default Header;