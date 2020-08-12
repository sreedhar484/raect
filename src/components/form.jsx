import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="todo">Registration Form</h2>
          <form onSubmit={this.props.onHandleSubmit}>
            <div className="form-group row">
              <label
                htmlFor="inputEmail"
                className={`col-sm-2 col-form-label ${this.props.state.ftext}`}
              >
                First Name
              </label>
              <div class="col-sm-7">
                <input
                  type="text"
                  className={`form-control`}
                  id="inputEmail"
                  placeholder="First Name"
                  onChange={this.props.onFirstName}
                  required
                ></input>
              </div>
              <div className="col-sm-3">
                <small id="passwordHelp" className={this.props.state.ftext}>
                  {this.props.state.ferror}
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="inputEmail"
                className={`col-sm-2 col-form-label ${this.props.state.ltext}`}
              >
                Last Name
              </label>
              <div class="col-sm-7">
                <input
                  type="text"
                  className={`form-control ${this.props.state.inp}`}
                  id="inputEmail"
                  placeholder="Last Name"
                  onChange={this.props.onLastName}
                  required
                ></input>
              </div>
              <div className="col-sm-3">
                <small id="passwordHelp" className={this.state.ltext}>
                  {this.props.state.lerror}
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="inputEmail"
                className={`col-sm-2 col-form-label ${this.props.state.mtext}`}
              >
                Email
              </label>
              <div class="col-sm-7">
                <input
                  type="text"
                  className={`form-control ${this.props.state.inp}`}
                  id="inputEmail"
                  placeholder="Email"
                  onChange={this.props.onEmail}
                  required
                ></input>
              </div>
              <div className="col-sm-3">
                <small id="passwordHelp" className={this.props.state.mtext}>
                  {this.props.state.merror}
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="inputPassword"
                className={`col-sm-2 col-form-label ${this.props.state.ptext}`}
              >
                Password
              </label>
              <div className="col-sm-7">
                <input
                  type="password"
                  className={`form-control ${this.props.state.pinp}`}
                  id="inputPassword"
                  placeholder="Password"
                  onChange={this.props.onPassword}
                  required
                />
              </div>
              <div className="col-sm-3">
                <small id="passwordHelp" className={this.props.state.ptext}>
                  {this.props.state.perror}
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="inputPassword"
                className={`col-sm-2 col-form-label ${this.props.state.cptext}`}
              >
                Confirm Password
              </label>
              <div className="col-sm-7">
                <input
                  type="password"
                  className={`form-control ${this.props.state.pinp}`}
                  id="inputPassword"
                  placeholder="Confirm Password"
                  onChange={this.props.onCPassword}
                  required
                />
              </div>
              <div className="col-sm-3">
                <small id="passwordHelp" className={this.props.state.cptext}>
                  {this.props.state.cperror}
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="inputPassword"
                className={`col-sm-2 col-form-label ${this.props.state.ntext}`}
              >
                Contact Number
              </label>
              <div className="col-sm-7">
                <input
                  type="number"
                  className={`form-control ${this.props.state.pinp}`}
                  id="inputPassword"
                  placeholder="Contact Number"
                  onChange={this.props.onNumber}
                  required
                />
              </div>
              <div className="col-sm-3">
                <small id="passwordHelp" className={this.props.state.ntext}>
                  {this.props.state.nerror}
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="Gender"
                className={`col-sm-2 col-form-label ${this.props.state.gtext}`}
              >
                Gender
              </label>
              <div className="col-sm-7">
                <select
                  id="Gender"
                  className="form-control"
                  onChange={this.props.onGender}
                >
                  <option>select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="col-sm-3">
                <small id="passwordHelp" className={this.props.state.gtext}>
                  {this.props.state.gerror}
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="Gender"
                className={`col-sm-2 col-form-label ${this.props.state.matext}`}
              >
                Marital status
              </label>
              <div className="col-sm-7">
                <select
                  id="Gender"
                  className="form-control"
                  onChange={this.props.onMarital}
                >
                  <option>select</option>
                  <option>Married</option>
                  <option>Unmarried</option>
                </select>
              </div>
              <div className="col-sm-3">
                <small id="passwordHelp" className={this.props.state.matext}>
                  {this.props.state.maerror}
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="Gender" className={`col-sm-2 col-form-label`}>
                Date of birth
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control"
                  id="Gender"
                  required
                  onChange={this.props.onDOB}
                ></input>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="Gender" className={`col-sm-2 col-form-label`}>
                Address
              </label>
              <div className="col-sm-7">
                <textarea
                  id="Gender"
                  className="form-control"
                  onChange={this.props.onAddress}
                ></textarea>
              </div>
            </div>

            <div className="form-group row">
              <button className="btn btn-success dbtn">Sign up</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
