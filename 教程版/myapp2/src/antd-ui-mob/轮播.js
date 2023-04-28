// @ts-nocheck
import React from "react";
import {Swiper, Toast } from "antd-mobile";

import styles from "./css/demo1.module.css";

const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];


// 生成jsx语法
const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className={styles.content}
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`);
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
));

export default function App() {
  return (
    <div>
        <Swiper loop autoplay={true}>{items}</Swiper>
    </div>
  );
}
