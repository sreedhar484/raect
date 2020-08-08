import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onreset}
          className="btn btn-primary btn-small m-2"
        >
          Reset
        </button>
        {this.props.counter.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            ondelete={this.props.ondelete}
            onincrement={this.props.onincrement}
            ondecrement={this.props.ondecrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
