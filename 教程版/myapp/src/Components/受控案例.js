// @ts-nocheck
import React, { Component } from "react";
import axios from "axios";
// 导入内容样式
import "./css/Cinema.css";

export default class Cinema extends Component {
  constructor(props) {
    super(props);

    // 构建数据
    this.state = {
      cinemaList: [],
      mytext: "",
    };

    // 没有学习生命周期，所以我们直接在状态中请求数据

    axios
      .get(
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=50&type=1&k=2487985",
        {
          // 设置请求头
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660212024174976967639041","bc":"110100"}',
            "X-Host": "mall.film-ticket.film.list",
          },
        }
      )
      .then((res) => {
        /*
        films: 一页的返回数据
        total: 影片数量
        */
        this.setState({
          cinemaList: res.data.data.films,
        });
      });
  }

  render() {
    return (
      <div className="CinemaText">
        <input
          type="text"
          value={this.state.mytext}
          onChange={(e) => {
            this.setState({
              mytext: e.target.value,
            });
          }}
        />
        <ul>
          {this.getCinemaList().map((item) => (
            <li key={item.filmId}>
              <div>{item.name}</div>
              <div>{item.synopsis}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  getCinemaList() {
    // 受控后，数据对象的复用更好用了
    return this.state.cinemaList.filter(
      (item) =>
        item.name.includes(this.state.mytext) ||
        item.synopsis.includes(this.state.mytext)
    );
  }
}
