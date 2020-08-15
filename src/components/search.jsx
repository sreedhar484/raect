import React, { Component } from "react";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="form-group row">
          <input
            type="search"
            placeholder="search in countries"
            className="form-control col-sm-11"
          ></input>
          <button className="fa fa-search btn btn-primary col-sm-1"></button>
        </div>
      </div>
    );
  }
}

export default Search;
