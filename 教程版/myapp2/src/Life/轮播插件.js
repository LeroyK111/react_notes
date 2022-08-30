import React, { Component } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// 引入自定义样式
import "./css/swiper.css";

export default class App extends Component {
  state = {
    list: [...Array(10).keys()],
  };

  componentDidMount() {
    var mySwiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      // 自动；轮播
      autoplay:true,

      loop: true, // 循环模式选项
      // 引入分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }

  render() {
    return (
      <div>
        <div className="swiper">
          <div className="swiper-wrapper">
            {this.state.list.map((item) => (
              <div className="swiper-slide" key={item}>
                {item}
              </div>
            ))}
          </div>
          {/* <!-- 如果需要分页器 --> */}
          <div className="swiper-pagination"></div>
          {/* <!-- 如果需要滚动条 --> */}
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    );
  }
}
