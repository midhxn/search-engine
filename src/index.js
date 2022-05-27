import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import App from './App';
import './global.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
document.getElementById('root')
);