import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import Hello from "./components/hello";
import Add from "./components/add";
import Todo from "./components/todo";
import Form from "./components/form";
import AxiosGet from "./components/axiosGet";
import HttpGet from "./components/HttpGet";
import Search from "./components/search";
import Axios from "axios";
import Model from "./components/portel";
class App extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    search: "",
    array: [],
    cou: [],
    ele: [],
    below100: false,
    m100500: false,
    above500: false,
    showModal: false,
  };
  // delete = (id) => {
  //   const counter = this.state.counter.filter((c) => c.id !== id);
  //   this.setState({ counter: counter });
  // };
  // increment = (id) => {
  //   const counter = [...this.state.counter];
  //   const index = counter.indexOf(id);
  //   counter[index] = { ...id };
  //   counter[index].value++;
  //   this.setState({ counter });
  // };
  // decrement = (id) => {
  //   const counter = [...this.state.counter];
  //   const index = counter.indexOf(id);
  //   counter[index] = { ...id };
  //   counter[index].value--;
  //   this.setState({ counter });
  // };
  // reset = () => {
  //   const counter = this.state.counter.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counter });
  // };
  onSearch = (event) => {
    this.setState({ search: event.target.value }, () => {
      this.setState({
        cou: this.state.array.filter((ele) =>
          ele.country.toLowerCase().startsWith(this.state.search.toLowerCase())
        ),
      });
    });
  };
  onChack1 = () => {
    this.setState({ below100: !this.state.below100 });
  };
  onChack2 = () => {
    this.setState({ m100500: !this.state.m100500 });
  };
  onChack3 = () => {
    this.setState({ above500: !this.state.above500 });
  };
  componentDidMount() {
    Axios.get("https://coronavirus-19-api.herokuapp.com/countries")
      .then((response) => {
        this.setState({
          array: response.data.sort((a, b) =>
            a.country > b.country ? 1 : b.country > a.country ? -1 : 0
          ),
          cou: response.data.sort((a, b) =>
            a.country > b.country ? 1 : b.country > a.country ? -1 : 0
          ),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  btnClick = () => {
    let arr = [];
    if (this.state.below100) {
      arr = arr.concat(
        this.state.array.filter((ele) => ele.deathsPerOneMillion < 100)
      );
    }
    if (this.state.m100500) {
      arr = arr.concat(
        this.state.array.filter(
          (ele) =>
            ele.deathsPerOneMillion >= 100 && ele.deathsPerOneMillion <= 500
        )
      );
    }
    if (this.state.above500) {
      arr = arr.concat(
        this.state.array.filter((ele) => ele.deathsPerOneMillion > 500)
      );
    }
    this.setState({ cou: arr, showModal: false });
  };
  handleShowMessageClick = () => this.setState({ showModal: true });
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
        {/* <Search /> */}
        <div className="container">
          <div className="form-group row">
            <input
              type="search"
              placeholder="search in countries"
              className="form-control col-sm-12"
              onChange={this.onSearch}
            ></input>
          </div>
        </div>
        {/* {this.state.search.length === 0 && this.state.cou.length === 0 ? (
          <AxiosGet
            state={this.state}
            onCheck1={this.onChack1}
            onCheck2={this.onChack2}
            onCheck3={this.onChack3}
            btnClick={this.btnClick}
          />
        ) : (
          <HttpGet
            state={this.state}
            onCheck1={this.onChack1}
            onCheck2={this.onChack2}
            onCheck3={this.onChack3}
            btnClick={this.btnClick}
          />
        )} */}
        <AxiosGet
          state={this.state}
          onCheck1={this.onChack1}
          onCheck2={this.onChack2}
          onCheck3={this.onChack3}
          btnClick={this.btnClick}
          handleShowMessageClick={this.handleShowMessageClick}
        />
      </div>
    );
  }
}

export default App;
