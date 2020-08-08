import React, { Component } from "react";
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      text: "",
      inp: "",
      ptext: "",
      pinp: "",
      uerror: "",
      perror: "",
    };
  }
  onUsername = (event) => {
    event.target.value.length < 5
      ? this.setState({
          text: "text-danger",
          inp: "invalid",
          uerror: "must be 5 chareters.",
        })
      : this.setState({ text: "text-success", inp: "valid", uerror: "" });
    this.setState({ name: event.target.value });
  };
  onPassword = (event) => {
    event.target.value.length > 8
      ? this.setState({ ptext: "text-success", pinp: "valid", perror: "" })
      : this.setState({
          ptext: "text-danger",
          pinp: "invalid",
          perror: "Must be 8-20 characters long.",
        });
    this.setState({ password: event.target.value });
  };
  onHandleSubmit = (event) => {
    alert("Logged in");
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group row">
            <label
              htmlFor="inputEmail"
              className={`col-sm-2 col-form-label ${this.state.text}`}
            >
              Email
            </label>
            <div class="col-sm-7">
              <input
                type="text"
                className={`form-control ${this.state.inp}`}
                id="inputEmail"
                placeholder="Email"
                onChange={this.onUsername}
              ></input>
            </div>
            <div className="col-sm-3">
              <small id="passwordHelp" className={this.state.text}>
                {this.state.uerror}
              </small>
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="inputPassword"
              className={`col-sm-2 col-form-label ${this.state.ptext}`}
            >
              Password
            </label>
            <div className="col-sm-7">
              <input
                type="password"
                className={`form-control ${this.state.pinp}`}
                id="inputPassword"
                placeholder="Password"
                onChange={this.onPassword}
              />
            </div>
            <div className="col-sm-3">
              <small id="passwordHelp" className={this.state.ptext}>
                {this.state.perror}
              </small>
            </div>
          </div>
          <button className="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    );
  }
}

export default Hello;
