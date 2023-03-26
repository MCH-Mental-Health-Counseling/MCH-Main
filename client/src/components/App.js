import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Library from './library/Library';
import Chatbot from './chatbot/Chatbot';

const App = () =>(
    <div>
        <BrowserRouter>
        <div>
            <Header/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/pages" component={About} />
            <Route exact path="/library" component={Library} />
            <Chatbot/>
        </div>
        </BrowserRouter>
    </div>
)

export default App;
