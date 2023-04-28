import React from "react";
import { useHistory } from "react-router-dom";
import { Tabs } from "antd-mobile";

export default function App(props) {
  // 函数式组件跳转
  // const navigate = useHistory();
  return (
    <div>
      <Tabs
        onChange={(key) => {
          console.log(key);
          // navigate.push(key)
        }}
      >
        <Tabs.Tab title="水果" key="fruits">
          菠萝
        </Tabs.Tab>
        <Tabs.Tab title="蔬菜" key="vegetables">
          西红柿
        </Tabs.Tab>
        <Tabs.Tab title="动物" key="animals">
          蚂蚁
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
