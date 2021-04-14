//React importları
import React from 'react';
import ReactDOM from 'react-dom';
//Bootstrap 
import 'bootstrap/dist/css/bootstrap.css';
//Sayfalar
import Index from './components/Index';
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
function index(){
    return(
        <Router>
            <Link exact to="/"></Link>
            <Switch>
                <Route exact path="/" component={Index}></Route>
            </Switch>
        </Router>

    )
}