import React, { Component } from "react";
import Appbar from "./Appbar";
import Content from "./Content";
import { Stack, Box, Button } from "@chakra-ui/core";
import NewForm from "./NewForm";
import Submit from "./Submit";
import Log from "./log";
import Axios from "axios";
import data1 from "../data/data.json";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      cou: [],
      temp: [],
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
      errorum: "",
      errorpm: "",
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
    this.getData(data1);
  }
  getData(data) {
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
  nameAsci = () => {
    this.setState(
      {
        temp: this.state.array.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        ),
      },
      () => this.getData(this.state.temp)
    );
  };
  nameDsci = () => {
    this.setState(
      {
        temp: this.state.array.sort((a, b) =>
          a.name < b.name ? 1 : b.name < a.name ? -1 : 0
        ),
      },
      () => this.getData(this.state.temp)
    );
  };
  recievedAsci = () => {
    this.setState(
      {
        temp: this.state.array.sort(
          (a, b) => a.recievedAmount - b.recievedAmount
        ),
      },
      () => this.getData(this.state.temp)
    );
  };
  recievedDsci = () => {
    this.setState(
      {
        temp: this.state.array.sort(
          (a, b) => b.recievedAmount - a.recievedAmount
        ),
      },
      () => this.getData(this.state.temp)
    );
  };
  pledgedAsci = () => {
    this.setState(
      {
        temp: this.state.array.sort(
          (a, b) => a.pledgedAmount - b.pledgedAmount
        ),
      },
      () => this.getData(this.state.temp)
    );
  };
  pledgedDsci = () => {
    this.setState(
      {
        temp: this.state.array.sort(
          (a, b) => b.pledgedAmount - a.pledgedAmount
        ),
      },
      () => this.getData(this.state.temp)
    );
  };

  btnClick = () => {
    if (this.state.userName === "sree") {
      this.setState({ erroru: false });
      if (this.state.password === "1234") {
        this.setState({ errorp: false, log: true });
      } else {
        this.setState({ errorp: true, errorum: "incorrect username" });
      }
    } else {
      this.setState({ erroru: true, errorpm: "incorrect password" });
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
        : this.getData(data1);
    });
  };
  onFilterChange = (value) => {
    value === "nasc" ? this.nameAsci() : this.nameDsci();
  };
  onSubmit = (notes, type, amount) => {
    console.log(
      this.state.name,
      this.state.phone,
      this.state.email,
      type,
      amount,
      notes
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
                  pledgedAsci={this.pledgedAsci}
                  pledgedDsci={this.pledgedDsci}
                  recievedAsci={this.recievedAsci}
                  recievedDsci={this.recievedDsci}
                  handlePageClick={this.handlePageClick}
                  onEdit={this.onEdit}
                  addNew={this.addNew}
                  onFilterChange={this.onFilterChange}
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
