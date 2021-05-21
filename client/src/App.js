import React, { Component } from "react";
import "./css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";

class App extends Component {
    render() {
        return ( 
            <Router > <Switch>
            <Route exact path = "/" component = { Home }/> 
            <Route path = "/Blog" component = { Blog }/> 
            <Route path = "/Recipes" component = { Recipes }/> 
            <Route path = "/Contact" component = { Contact }/> 
            <Route path = "/Aboutus" component = { Aboutus }/>

            </Switch> </Router >
        );
    }
}
export default App;