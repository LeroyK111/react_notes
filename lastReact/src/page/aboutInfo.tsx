/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Outlet } from "@tanstack/react-router";
import { useStore } from "../store/useGlobalState";
// 模块化css
import about from "./aboutInfo.module.scss";
// 使用更好的组件样式
import styled from "styled-components";

// 两种写法, 最好不要动态创建组件,
const TextDiv = styled.div({
  color: "white",
});
const TextSpan = styled.span`
  color: skyblue;
`;

export default function aboutInfo() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);

  return (
    <div className={about.body}>
      {/* tailwind 生效 */}
      <span className="text-white"> {bears}</span>
      <button onClick={increasePopulation}>点我+1</button>
      <TextDiv>123123</TextDiv>
      <TextSpan>123123</TextSpan>
      <br />
      <Outlet></Outlet>
    </div>
  );
}
