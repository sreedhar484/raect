import React, { Component } from "react";
import Appbar from "./Appbar";
import Content from "./Content";
import { Stack, Box, Button } from "@chakra-ui/core";
import NewForm from "./NewForm";
import Submit from "./Submit";
import Log from "./log";
import Bottom from "./bottom";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      cou: [],
    };
  }
  componentDidMount() {
    Axios.get("./data")
      .then((response) => {
        console.log(response);
        this.setState({
          array: response,
          cou: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Box>
        <Stack spacing={8}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Log />
              </Route>
              <Route exact path="/main">
                <Appbar />
                <Content />
              </Route>
              <Route path="/newForm">
                <Appbar />
                <NewForm />
              </Route>
              <Route path="/submit">
                <Appbar />
                <Submit />
              </Route>
            </Switch>
          </Router>
        </Stack>
      </Box>
    );
  }
}

export default Main;
