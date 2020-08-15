import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./todo";
import App from "../App";
import Home from "./home";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/covid19">
              <App />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
