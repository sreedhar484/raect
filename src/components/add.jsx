import React, { Component } from "react";
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      sum: "",
    };
  }
  onNum1 = (event) => {
    this.setState({ num1: event.target.value });
  };
  onNum2 = (event) => {
    this.setState({ num2: event.target.value });
  };
  onAdd = () => {
    this.setState({ sum: Number(this.state.num1) + Number(this.state.num2) });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.num1}
          onChange={this.onNum1}
        ></input>
        <input
          type="text"
          value={this.state.num2}
          onChange={this.onNum2}
        ></input>
        <button onClick={this.onAdd}>calculate</button>
        <input type="text" value={this.state.sum} readOnly></input>
      </div>
    );
  }
}

export default Add;
