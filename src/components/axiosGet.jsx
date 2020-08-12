import React, { Component } from "react";
import Axios from "axios";
class AxiosGet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }
  componentDidMount() {
    Axios.get(
      "http://www.asterank.com/api/mpc?query=%7B%22e%22:%7B%22$lt%22:0.1%7D,%22i%22:%7B%22$lt%22:4%7D,%22a%22:%7B%22$lt%22:1.5%7D%7D&limit=10"
    )
      .then((response) => {
        this.setState({ array: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container">
        <h2 className="todo">asterank Api</h2>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>rms</th>
              <th>epoch</th>
              <th>ref</th>
              <th>comp</th>
            </tr>
          </thead>
          <tbody>
            {this.state.array.map((data, idx) => (
              <tr key={idx}>
                <td>{data.rms}</td>
                <td>{data.epoch}</td>
                <td>{data.ref}</td>
                <td>{data.comp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AxiosGet;
