import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Library from './library/Library';
import Chatbot from './chatbot/Chatbot';

const App = () => (
    <div>
        <BrowserRouter>
            <div className="container">
                <Header>
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route exact path="/pages" element={<About />} />
                        <Route exact path="/library" element={<Library />} />
                    </Routes>
                </Header>
            </div>
        </BrowserRouter>
    </div>
)

export default App;
