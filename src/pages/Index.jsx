import React, { Component } from "react";
import "../css/index.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Recipes from "./Recipes";
import Contact from "./Contact";
class Index extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Recipes" component={Recipes} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default Index;
