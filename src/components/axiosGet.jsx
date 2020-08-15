import React, { Component } from "react";
import Model from "./portel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class AxiosGet extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/">Home</Link>
        <h2 className="todo">Covid 19 Cases</h2>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>country</th>
              <th>Total Cases</th>
              <th>Today Cases</th>
              <th>Total Deaths</th>
              <th>Today Deaths</th>
              <th>Today Recoverd</th>
              <th>Active Cases</th>
              <th>Critical Cases</th>
              <th>Cases Per OneMillion</th>
              <th>
                Deaths Per OneMillion
                <button
                  onClick={this.props.handleShowMessageClick}
                  className="fa fa-filter"
                ></button>
                {this.props.state.showModal ? (
                  <Model onClose={this.handleCloseModal}>
                    <div className="container">
                      <input
                        type="checkbox"
                        name="below100"
                        onChange={this.props.onCheck1}
                      ></input>
                      below 100<br></br>
                      <input
                        type="checkbox"
                        name="m100500"
                        onChange={this.props.onCheck2}
                      ></input>
                      100-500<br></br>
                      <input
                        type="checkbox"
                        name="above500"
                        onChange={this.props.onCheck3}
                      ></input>
                      above 500<br></br>
                      <button
                        onClick={this.props.btnClick}
                        className="btn btn-primary"
                      >
                        apply
                      </button>
                    </div>
                  </Model>
                ) : null}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.state.cou.map((data, idx) => (
              <tr key={idx}>
                <td>{data.country}</td>
                <td>{data.cases}</td>
                <td>{data.todayCases}</td>
                <td>{data.deaths}</td>
                <td>{data.todayDeaths}</td>
                <td>{data.recovered}</td>
                <td>{data.active}</td>
                <td>{data.critical}</td>
                <td>{data.casesPerOneMillion}</td>
                <td>{data.deathsPerOneMillion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AxiosGet;
