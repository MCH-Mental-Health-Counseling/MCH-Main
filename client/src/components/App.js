import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About/About';
import Library from './pages/library/Library';
import Home from './pages/Home/Home';
import Chatbot from './chatbot/Chatbot';
import "./App.scss";
import Login from './Login';
import Signup from './Signup';
import ProfileIcon from './ProfileIcon';


const App = () => {
    const [view, setView] = useState("");
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <Header>
                        <Routes>
                            <Route exact path="/" element={<Landing view={view} setView={setView} />} />
                            <Route exact path="/home" element={<Home />} />
                            <Route exact path="/pages" element={<About />} />
                            <Route exact path="/library" element={<Library />} />
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/signup" element={<Signup />} />
                            <Route exact path="/profileicon" element={<ProfileIcon />} />
                        </Routes>
                    </Header>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
