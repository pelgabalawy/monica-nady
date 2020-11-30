import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router } from "react-router-dom";
// import $ from 'jquery';
// import Popper from 'popper.js';
import App from './App';

ReactDOM.render(
    <Router>
        <App />
    </Router>,   
document.getElementById('root'));


