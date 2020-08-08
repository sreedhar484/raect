import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://www.google.com">
          Nandu{" "}
          <span className="badge badge-pill badge-primary">
            {this.props.ontotal}
          </span>
          <span className="badge badge-pill badge-primary">
            {this.props.onsum}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
