import React, { Component } from "react";
import { Button, TextField, IconButton } from "@material-ui/core";
import {} from "@material-ui/icons";

class register extends Component {
  render() {
    return (
      <div>
        <form>
          <TextField label="First Name"></TextField>
          <TextField label="last Name"></TextField>
          <TextField label="Email"></TextField>
        </form>
      </div>
    );
  }
}

export default register;
