import React, { Component } from "react";
import Form from "./form";
import Form1 from "./form1";
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      mail: "",
      password: "",
      cpassword: "",
      number: "",
      gender: "select",
      marital: "select",
      dob: "",
      address: "",
      ftext: "",
      ltext: "",
      mtext: "",
      ptext: "",
      cptext: "",
      ntext: "",
      gtext: "",
      matext: "",
      ferror: "",
      lerror: "",
      merror: "",
      perror: "",
      cperror: "",
      nerror: "",
      gerror: "",
      maerror: "",
      box: "box",
      box1: "",
    };
  }
  onFirstName = (event) => {
    event.target.value.length < 1
      ? this.setState({
          ftext: "text-danger",
          ferror: "Enter the First Name",
        })
      : this.setState({ ftext: "text-success", ferror: "" });
    this.setState({ firstname: event.target.value });
  };

  onLastName = (event) => {
    event.target.value.length < 1
      ? this.setState({
          ltext: "text-danger",
          lerror: "Enter the Lasst Name.",
        })
      : this.setState({ ltext: "text-success", lerror: "" });
    this.setState({ lastname: event.target.value });
  };

  onEmail = (event) => {
    event.target.value.length < 8
      ? this.setState({
          mtext: "text-danger",
          merror: "Enter A valid mail adddress.",
        })
      : this.setState({ mtext: "text-success", merror: "" });
    this.setState({ mail: event.target.value });
  };

  onPassword = (event) => {
    event.target.value.length > 7
      ? this.setState({ ptext: "text-success", perror: "" })
      : this.setState({
          ptext: "text-danger",
          perror: "Must be 8-20 characters long.",
        });
    this.setState({ password: event.target.value });
  };

  onCPassword = (event) => {
    event.target.value === this.state.password
      ? this.setState({ cptext: "text-success", cperror: "" })
      : this.setState({
          cptext: "text-danger",
          inp: "invalid",
          cperror: "Password does not match.",
        });
    this.setState({ cpassword: event.target.value });
  };

  onNumber = (event) => {
    event.target.value.length === 10
      ? this.setState({ ntext: "text-success", nerror: "" })
      : this.setState({
          ntext: "text-danger",
          nerror: "Enter valid phone number.",
        });
    this.setState({ number: event.target.value });
  };

  onAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  onGender = (event) => {
    this.setState({ gender: event.target.value });
  };

  onMarital = (event) => {
    this.setState({ marital: event.target.value });
  };

  onDOB = (event) => {
    this.setState({ dob: event.target.value });
  };

  onHandleSubmit = (event) => {
    this.state.marital === "select"
      ? this.setState({
          matext: "text-danger",
          maerror: "select a valid option.",
        })
      : this.setState({ matext: "text-success", maerror: "" });

    this.state.gender === "select"
      ? this.setState({
          gtext: "text-danger",
          gerror: "select a gender.",
        })
      : this.setState({ gtext: "text-success", gerror: "" });
    if (this.state.gender != "select" && this.state.marital != "select") {
      this.setState({ box: "", box1: "box" });
    }
    event.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className={this.state.box1}>
          <Form
            state={this.state}
            onFirstName={this.onFirstName}
            onAddress={this.onAddress}
            onLastName={this.onLastName}
            onEmail={this.onEmail}
            onPassword={this.onPassword}
            onCPassword={this.onCPassword}
            onNumber={this.onNumber}
            onGender={this.onGender}
            onMarital={this.onMarital}
            onDOB={this.onDOB}
            onHandleSubmit={this.onHandleSubmit}
          />
        </div>
        <div className={this.state.box}>
          <Form1 state={this.state} />
        </div>
      </React.Fragment>
    );
  }
}

export default Hello;
