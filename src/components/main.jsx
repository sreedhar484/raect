import React, { Component } from "react";
import Appbar from "./Appbar";
import Content from "./Content";
import { Stack, Box, Button } from "@chakra-ui/core";
import NewForm from "./NewForm";
import Submit from "./Submit";
import Log from "./log";
import Axios from "axios";
import data from "../data/data.json";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      cou: [],
      userName: "",
      password: "",
      errorp: false,
      errorp: false,
      log: false,
      search: "",
      totalpledged: 0,
      totalrecieved: 0,
      offset: 0,
      perPage: 3,
      currentPage: 0,
      name: "",
      phone: "",
      email: "",
      edit: false,
    };
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        const data = this.state.array;

        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          cou: slice,
        });
      }
    );
  };
  componentDidMount() {
    this.getData();
  }
  getData() {
    var tdata = data;
    var slice = tdata.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({ array: data, cou: data }, () => {
      this.setState({
        totalpledged: this.state.array
          .map((data) => data.pledgedAmount)
          .reduce((a, b) => a + b),
      });
      this.setState({
        totalrecieved: this.state.array
          .map((data) => data.recievedAmount)
          .reduce((a, b) => a + b),
      });
    });
    this.setState({
      pageCount: Math.ceil(tdata.length / this.state.perPage),
      cou: slice,
    });
  }
  addNew = () => {
    this.setState({ name: "", phone: "", email: "" });
  };
  onEdit = (id) => {
    const data = this.state.array[id];
    this.setState({
      name: data.name,
      phone: data.phone,
      email: data.email,
      edit: true,
    });
  };
  nameChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  changeHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  nameAsci = (name) => {
    name === "name"
      ? this.setState({
          cou: this.state.cou.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          ),
        })
      : name === "pledgedAmount"
      ? this.setState({
          cou: this.state.cou.sort((a, b) => a.pledgedAmount - b.pledgedAmount),
        })
      : this.setState({
          cou: this.state.cou.sort(
            (a, b) => a.recievedAmount - b.recievedAmount
          ),
        });
  };
  nameDsci = (name) => {
    this.setState({
      cou: this.state.cou.sort((a, b) =>
        a.name < b.name ? 1 : b.name < a.name ? -1 : 0
      ),
    });
  };
  btnClick = () => {
    if (this.state.userName === "sree") {
      this.setState({ erroru: false });
      if (this.state.password === "1234") {
        this.setState({ errorp: false, log: true });
      } else {
        this.setState({ errorp: true });
      }
    } else {
      this.setState({ erroru: true });
    }
  };
  search = (event) => {
    this.setState({ search: event.target.value }, () => {
      this.state.search.length > 0
        ? this.setState({
            cou: this.state.array.filter((ele) =>
              ele.name.toLowerCase().startsWith(this.state.search.toLowerCase())
            ),
          })
        : this.getData();
    });
  };
  onSubmit = (notes, type, amount) => {
    console.log(
      this.state.name,
      this.state.phone,
      this.state.email,
      notes,
      type,
      amount
    );
    this.setState({
      name: "",
      phone: "",
      email: "",
      notes: "",
      type: "",
      amount: "",
    });
  };
  render() {
    return (
      <Box>
        <Stack spacing={8}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Log
                  state={this.state}
                  btnClick={this.btnClick}
                  changeHandle={this.changeHandle}
                />
              </Route>
              <Route exact path="/main">
                <Appbar
                  handlePageClick={this.handlePageClick}
                  state={this.state}
                />
                <Content
                  state={this.state}
                  search={this.search}
                  nameAsci={this.nameAsci}
                  nameDsci={this.nameDsci}
                  handlePageClick={this.handlePageClick}
                  onEdit={this.onEdit}
                  addNew={this.addNew}
                />
              </Route>
              <Route path="/newForm">
                <Appbar
                  handlePageClick={this.handlePageClick}
                  state={this.state}
                />
                <NewForm
                  nameChange={this.nameChange}
                  state={this.state}
                  onSubmit={this.onSubmit}
                />
              </Route>
              <Route path="/submit">
                <Appbar
                  handlePageClick={this.handlePageClick}
                  state={this.state}
                />
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
