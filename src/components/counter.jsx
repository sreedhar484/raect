import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.classFormat()}>{this.countFormat()}</span>
        <button
          onClick={() => this.props.onincrement(this.props.counter)}
          className="btn btn-primary btn-small m-2"
        >
          Increment
        </button>
        <button
          disabled={!this.props.counter.value}
          onClick={() => this.props.ondecrement(this.props.counter)}
          className="btn btn-warning btn-small m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.ondelete(this.props.counter.id)}
          className="btn btn-danger btn-small m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  countFormat() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
  classFormat() {
    const count = this.props.counter.value;
    return count === 0 ? "badge badge-warning m-2" : "badge badge-primary m-2";
  }
}

export default Counter;
