import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
const wrappedApp = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
ReactDOM.render(wrappedApp, document.getElementById('root'));
