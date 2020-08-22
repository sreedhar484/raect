import React, { PureComponent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../App.css";
import data from "../data/data.json";

export class PaginationExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      cou: [],
      array: [],
      perPage: 1,
      currentPage: 0,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
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
    var tdata = data;
    console.log("data-->" + JSON.stringify(tdata));
    var slice = tdata.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(tdata.length / this.state.perPage),
      array: tdata,
      cou: slice,
    });
  }

  render() {
    return (
      <div>
        <h1>Gk Techy</h1>

        <table border="1">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </thead>
          <tbody>
            {this.state.cou.map((tdata, i) => (
              <tr>
                <td>{tdata.name}</td>
                <td>{tdata.phone}</td>
                <td>{tdata.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={0}
          onPageChange={this.handlePageClick}
        />
      </div>
    );
  }
}

export default PaginationExample;
