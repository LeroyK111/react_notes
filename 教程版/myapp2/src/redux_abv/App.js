// @ts-nocheck
import React, { useEffect, useState } from "react";
import Router from "./router/indexRouter";
import Tabar from "./components/Tabar";
import "./css/App.css";

// 直接使用这个包装
import { connect } from "react-redux";
// !这个就不需要了
// import store from "./redux/store";

function App(props) {
  return (
    <div>
      <Router>
        {/* 麻烦啊，居然要使用插槽 */}
        {props.isShow && <Tabar></Tabar>}
      </Router>
    </div>
  );
}


// 还可以将新状态和新方法，都映射出去
let demo = (state) => {
  console.log("store默认的状态值:", state);
  return {
    a: 1,
    b: 2,
    isShow: state.TabbarReducer.show,
  };
};

export default connect(demo)(App);
