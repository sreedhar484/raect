import React, { Component } from "react";
import Appbar from "./Appbar";
import Content from "./Content";
import { Stack, Box } from "@chakra-ui/core";
import NewForm from "./NewForm";
import Submit from "./Submit";
import Log from "./log";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      cou: [],
      temp: [],
      userName: "",
      password: "",
      errorp: false,
      erroru: false,
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
      type: "",
      notes: "",
      edit: false,
      editone: false,
      userid: 0,
      errorum: "",
      errorpm: "",
      erroruser: "",
      errorphone: "",
      erroremail: "",
      errortype: "",
      errornote: "",
      entry: false,
      amountCount: 0,
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      patternphone: /^\d{10}$/,
    };
  }
  onDownClick = () => {
    this.setState({ amountCount: Number(this.state.amountCount) + 1 });
  };
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
    Axios.get("http://localhost:2733/details")
      .then((res) => {
        console.log(res.data);
        this.getData(res.data);
      })
      .catch((err) => console.log(err));
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
          .map((data) => (data.recievedAmount ? data.recievedAmount : 0))
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
    const data = this.state.array.filter((data) => data.userId === id);
    this.setState(
      {
        name: data[0].Name,
        phone: data[0].phone,
        email: data[0].email,
        userid: data[0].userId,
        edit: true,
      },
      () => console.log(this.state.userid)
    );
  };
  nameChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };
  changeHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  nameAsci = () => {
    this.setState(
      {
        temp: this.state.array.sort((a, b) =>
          a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
        ),
      },
      () => this.getData(this.state.temp)
    );
  };
  nameDsci = () => {
    this.setState(
      {
        temp: this.state.array.sort((a, b) =>
          a.Name < b.Name ? 1 : b.Name < a.Name ? -1 : 0
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
  onDelete = (id) => {
    Axios.delete("http://localhost:2733/deldetails/" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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

  btnClick = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:2733/login", {
      userName: this.state.userName,
      password: this.state.password,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data === "You don't have a account") {
          this.setState({ errorum: "incorrect username" });
        } else if (res.data === "Invalid credentials") {
          this.setState({ errorpm: "incorrect password", errorum: "" });
        } else {
          this.setState({ log: true, errorpm: "" });
        }
      })
      .catch((err) => console.log(err));
  };
  search = (event) => {
    this.setState({ search: event.target.value }, () => {
      this.state.search.length > 0
        ? this.setState({
            cou: this.state.array.filter((ele) =>
              ele.Name.toLowerCase().startsWith(this.state.search.toLowerCase())
            ),
          })
        : Axios.get("http://localhost:2733/details")
            .then((res) => {
              this.getData(res.data);
            })
            .catch((err) => console.log(err));
    });
  };
  onFilterChange = (value) => {
    value === "nasc" ? this.nameAsci() : this.nameDsci();
  };
  onSubmit1 = (event) => {
    if (this.state.name.length > 0) {
      this.setState({ erroruser: "" });
      if (this.state.patternphone.test(this.state.phone)) {
        this.setState({ errorphone: "" });
        if (this.state.pattern.test(this.state.email)) {
          this.setState({ erroremail: "" });
          if (this.state.type !== "") {
            this.setState({ entry: true, errortype: "" });
            this.state.editone
              ? Axios.put(
                  "http://localhost:2733/editdetails/" + this.state.userid,
                  {
                    Name: this.state.name,
                    phone: Number(this.state.phone),
                    email: this.state.email,
                    deb_type: this.state.type,
                    deb_amount: this.state.amountCount * 1000 + 10000,
                  }
                )
                  .then((res) => {
                    console.log(res);
                    Axios.get("http://localhost:2733/details")
                      .then((res) => {
                        console.log(res.data);
                        this.setState({
                          name: "",
                          phone: "",
                          email: "",
                          type: "",
                          editone: false,
                          amountCount: 0,
                        });
                        this.getData(res.data);
                      })
                      .catch((err) => console.log(err));
                  })
                  .catch((err) => console.log(err))
              : Axios.post("http://localhost:2733/deb_form", {
                  Name: this.state.name,
                  phone: Number(this.state.phone),
                  email: this.state.email,
                  deb_type: this.state.type,
                  deb_amount: this.state.amountCount * 1000 + 10000,
                })

                  .then((res) => {
                    console.log(res);
                    Axios.get("http://localhost:2733/details")
                      .then((res) => {
                        console.log(res.data);
                        this.setState({
                          name: "",
                          phone: "",
                          email: "",
                          type: "",
                          amountCount: 0,
                        });
                        this.getData(res.data);
                      })
                      .catch((err) => console.log(err));
                  })
                  .catch((err) => console.log(err));
          } else {
            this.setState({ errortype: "plese select any type" });
          }
        } else {
          this.setState({ erroremail: "please enter a valid email" });
        }
      } else {
        this.setState({ errorphone: "please enter a valid phone number" });
      }
    } else {
      this.setState({ erroruser: "please enter user name" });
    }
    event.preventDefault();
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
                  onDownClick={this.onDownClick}
                  onDelete={this.onDelete}
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
                  onSubmit1={this.onSubmit1}
                />
              </Route>
              <Route path="/submit">
                <Appbar
                  handlePageClick={this.handlePageClick}
                  state={this.state}
                />
                <Submit state={this.state} />
              </Route>
            </Switch>
          </Router>
        </Stack>
      </Box>
    );
  }
}

export default Main;
