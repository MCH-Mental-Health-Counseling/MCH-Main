import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter, Router, Switch, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About/About';
import Library from './pages/library/Library';
import Home from './pages/Home/Home';
import Chatbot from './chatbot/Chatbot';
import "./App.scss";
import Login from './Authentication/Login/Login';
import Signup from './Authentication/Signup/Signup';
import ProfileIcon from './Authentication/Profile/ProfileIcon';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "",
            loggedIn: false
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('/api/profile')
                .then(() => this.setState({ loggedIn: true }))
                .catch(() => this.setState({ loggedIn: false }));
        }
    }

    handleLogin = () => {
        console.log("Logged in");
        this.setState({ loggedIn: true });
    };

    handleLogout = () => {
        localStorage.removeItem('token');
        this.setState({ loggedIn: false });
    }

    setView = (value) => {
        this.setState({view: value});
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header loggedIn={this.state.loggedIn} onLogout={this.handleLogout}>
                        <div className="app_container">
                            <Routes>
                                <Route exact path="/" element={<Landing view={this.state.view} setView={(this.setView)} />} />
                                <Route exact path="/landing_login" element={<Landing view={this.state.view} setView={this.setView} />} />
                                <Route exact path="/home" element={<Home />} />
                                <Route exact path="/pages" element={<About />} />
                                <Route exact path="/library" element={<Library />} />
                                {/*<Route exact path="/login" element={<Login />} />*/}
                                {/*<Route exact path="/signup" element={<Signup />} />*/}
                                {/*<Route exact path="/profile" element={<ProfileIcon />} />*/}
                                <Route exact path="/signup" element={<Signup onLogin={this.handleLogin} />}></Route>
                                <Route exact path="/login" element={<Login onLogin={this.handleLogin} />}></Route>
                                <Route exact path="/profile" element={<ProfileIcon />}></Route>
                            </Routes>
                        </div>
                    </Header>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
