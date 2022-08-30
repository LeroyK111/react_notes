// @ts-nocheck
import React, { Component } from "react";
import axios from "axios";
// 导入内容样式
import "../css/Cinema.css";

export default class Cinema extends Component {
  constructor(props) {
    super(props);

    // 构建数据
    this.state = {
      cinemaList: [],
      oldCinemaList: [],
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
          oldCinemaList: res.data.data.films,
        });

        
        console.log("初始数据", this.state.cinemaList);
      });
  }

  render() {
    return (
      <div className="CinemaText">
        <input
          type="text"
          placeholder="检索电影"
          onInput={(e) => {
            this.handleInput(e);
          }}
        />
        <ul>
          {this.state.cinemaList.map((item) => (
            <li key={item.filmId}>
              <div>{item.name}</div>
              <div>{item.synopsis}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // 监听输入
  handleInput(e) {
    // 过滤条件
    let newList = this.state.oldCinemaList.filter(
      (item) =>
        item.name.includes(e.target.value) ||
        item.synopsis.includes(e.target.value)
    );
    this.setState({
      cinemaList: newList,
    });


    // 事件是异步操作，里面的数据
    console.log("事件中的数据", this.state.cinemaList);
    
  }
}
