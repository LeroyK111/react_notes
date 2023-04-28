import React, { Component } from "react";
import "./css/anli3.css";

class FilmList extends Component {
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.type === 1) {
      // 请求正在热映的电影
      console.log("请求正在热映的电影");
    } else {
      // 请求即将上映的电影
      console.log("请求即将上映的电影");
    }
  }

  render() {
    return <div>FilmList - {this.props.type}</div>;
  }
}

export default class App extends Component {
  state = {
    type: 1,
  };
  render() {
    return (
      <div>
        <ul id="navbar">
          <li
            onClick={() => {
              this.setState({
                type: 1,
              });
            }}
          >
            正在热映
          </li>
          <li
            onClick={() => {
              this.setState({
                type: 2,
              });
            }}
          >
            即将上映
          </li>
        </ul>
        <FilmList type={this.state.type}></FilmList>
      </div>
    );
  }
}
