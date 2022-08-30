import React, { useEffect, useState } from "react";
import { observable, autorun } from "mobx";
import Son from "./Component/son";
import store from "./mobx/store";
import Test from "./Component/test";

// 对于普通类型数据的监听
var number = observable.box(10);
var str = observable.box("dsafdsf");

// 原始数据
var data = { a: 1, b: { c: [1, 2] } };
var dataList = [1, 2, 3, 4, 5, 6];

// 对象的包装方式一
// var obj = observable.map(data);
// 包装方式2
var obj = observable(data);

// 数组包装方式一
// var list = observable.map(dataList);
// 数组包装方式2
var list = observable(dataList);

autorun(() => {
  // 这里只监听到了number的改变
  console.log(number.get());
});

autorun(() => {
  // 这里只监听到了number的改变
  console.log(str.get());
});

// setTimeout(() => {
//   number.set(29);
//   str.set("111");
// }, 1000);

// !监听对象
autorun(() => {
  // 访问方式1
  // console.log(obj.get("a"));
  // 访问方式2
  console.log(obj.a);
});

setTimeout(() => {
  // 修改方式1
  // obj.set("a", 20);
  // 修改方式2
  obj.a = 20;
}, 0);

// !监听数组
autorun(() => {
  // console.log(list.get(0));
  console.log(list[0]);
});

setTimeout(() => {
  // list.set(0, 100)
  list[0] = 100;
}, 1000);

export default function App() {
  const [first, setfirst] = useState(store.isShow);

  useEffect(() => {
    autorun(() => {
      setfirst(store.isShow)
    });
  }, []);
  

  return (
    <div>
      <button
        onClick={() => {
          store.changeShow();
        }}
      >
        点我显示子组件
      </button>
      {first && <Son></Son>}
      <Test></Test>
    </div>
  );
}
