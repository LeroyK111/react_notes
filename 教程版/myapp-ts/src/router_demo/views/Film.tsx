import React, { Component, createRef } from "react";
import axios from "axios";
// 直接引入路由自带的约束
import { RouteComponentProps } from "react-router-dom";

import { Button, Swiper, Toast } from "antd-mobile";
import { SwiperRef } from "antd-mobile/es/components/swiper";

interface item {
  filmId: number;
  name: string;
}

// 轮播组件
const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      style={{
        background: color,
        height: "100px",
        lineHeight: "100px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
      }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`);
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
));

export default class Film extends Component<RouteComponentProps, any> {
  state = {
    list: [],
  };

  ref = createRef<SwiperRef>();

  componentDidMount() {
    if (this.state.list.length === 0) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1934484",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660212024174976967639041"}',
          "X-Host": "mall.film-ticket.film.list",
        },
        method: "GET",
      }).then((res) => {
        // console.log(res.data.data.films);
        this.setState({
          list: res.data.data.films,
        });
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Film页面</h1>
        {/* 轮播图 */}
        <Swiper autoplay allowTouchMove={false} ref={this.ref}>
          {items}
        </Swiper>
        {/* 轮播图按钮 */}
        <Button
          color="primary"
          onClick={() => {
            this.ref.current?.swipePrev();
          }}
        >
          上一个
        </Button>
        <Button
          color="success"
          onClick={() => {
            this.ref.current?.swipeNext();
          }}
        >
          下一个
        </Button>
        <ul>
          {this.state.list.map((item: item) => (
            <li
              key={item.filmId}
              onClick={() => {
                this.props.history.push(`/detail/${item.filmId}`);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
