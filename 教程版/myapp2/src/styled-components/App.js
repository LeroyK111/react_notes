import React, { useEffect } from "react";
// 导入样式组件库
import styled from "styled-components";

// 这就是一种高阶组件的模式，支持sass语法
const StyleFooter = styled.footer`
  background: yellow;
  li {
    list-style: none;
  }
`;

export default function App() {
  return (
    <StyleFooter>
      <ul>
        <li>首页</li>
        <li>列表</li>
        <li>我的</li>
      </ul>
    </StyleFooter>
  );
}
