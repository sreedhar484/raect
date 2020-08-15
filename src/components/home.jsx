import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div>
          <ul>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/covid19">Covid 19 Updates</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
