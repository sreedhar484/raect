import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import Hello from "./components/hello";
import Add from "./components/add";
import Todo from "./components/todo";
import Form from "./components/form";
import AxiosGet from "./components/axiosGet";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  delete = (id) => {
    const counter = this.state.counter.filter((c) => c.id !== id);
    this.setState({ counter: counter });
  };
  increment = (id) => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(id);
    counter[index] = { ...id };
    counter[index].value++;
    this.setState({ counter });
  };
  decrement = (id) => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(id);
    counter[index] = { ...id };
    counter[index].value--;
    this.setState({ counter });
  };
  reset = () => {
    const counter = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };
  render() {
    return (
      <div className="main">
        {/* <Navbar
          ontotal={this.state.counter.filter((c) => c.value > 0).length}
          onsum={this.state.counter
            .map((c) => c.value)
            .reduce((a, b) => a + b, 0)}
        />
        <main className="container">
          <Counters
            counter={this.state.counter}
            ondelete={this.delete}
            onreset={this.reset}
            onincrement={this.increment}
            ondecrement={this.decrement}
          />
          </main>*/}
        {/* <Hello /> */}
        {/* <Add /> */}
        {/* <Todo /> */}
        {/* <Form /> */}
        <AxiosGet />
      </div>
    );
  }
}

export default App;
