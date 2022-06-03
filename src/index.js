import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import { ResultContextProvider } from './context/ResultContextProvider';
import App from './App';
import './global.css';

ReactDOM.render(
<ResultContextProvider>
    <Router>
        <App />
    </Router>,
</ResultContextProvider>,
document.getElementById('root')
);