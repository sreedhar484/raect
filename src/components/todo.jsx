import React, { Component } from "react";
import "../App.css";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todo: [],
    };
  }
  onHandleChange = (event) => {
    this.setState({ text: event.target.value });
  };
  addItem = () => {
    this.state.todo.push(this.state.text);
    this.setState({ text: "" });
  };
  onDelete = (id) => {
    this.state.todo.splice(id, 1);
    this.setState({ todo: this.state.todo });
  };
  onEdit = (id) => {
    this.setState({ text: this.state.todo[id] });
    this.state.todo.splice(id, 1);
    this.setState({ todo: this.state.todo });
  };
  onClear = () => {
    this.state.todo = [];
    this.setState({ todo: this.state.todo });
  };
  render() {
    return (
      <div className="container">
        <div className="todo1">
          <h2 className="todo">Todo Input</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={this.state.text}
              onChange={this.onHandleChange}
              placeholder="Enter a new todo item"
            ></input>
          </div>
          <div>
            <button
              className="btn btn-success w-100 fa fa-plus-circle"
              onClick={this.addItem}
            >
              Add Item
            </button>
          </div>
        </div>
        <div className="todo1">
          <h2 className="todo">Todo List</h2>
          {this.state.todo.map((todo, id) => (
            <div className="form-group form-inline" key={id}>
              <input
                type="text"
                className="form-control col-sm-11"
                value={todo}
                readOnly
              ></input>
              <button
                className="btn btn-secondary fa fa-edit"
                onClick={() => this.onEdit(id)}
              ></button>
              <button
                className="btn btn-warning fa fa-trash"
                onClick={() => this.onDelete(id)}
              ></button>
            </div>
          ))}
          <div>
            <button className="btn btn-danger w-100" onClick={this.onClear}>
              clear all
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
