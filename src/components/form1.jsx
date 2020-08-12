import React, { Component } from "react";
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h2 className="todo">Registration Details</h2>
        <table className="table table-dark table-hover">
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{this.props.state.firstname}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{this.props.state.lastname}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.props.state.mail}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>{this.props.state.password}</td>
            </tr>
            <tr>
              <td>Contact Number</td>
              <td>{this.props.state.number}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{this.props.state.gender}</td>
            </tr>
            <tr>
              <td>Marital Status</td>
              <td>{this.props.state.marital}</td>
            </tr>
            <tr>
              <td>Date of birth</td>
              <td>{this.props.state.dob}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{this.props.state.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form1;
