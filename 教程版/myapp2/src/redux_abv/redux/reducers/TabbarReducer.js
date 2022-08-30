/*
! 全局管理中间件redux
*/

import { legacy_createStore as createStore } from "redux";

/*
!本质是一个包装过的订阅发布模式，
! store.subscribe() 监听事件
! store.dispatch() 发布事件
! store.getState() 访问最新状态

*/

// 写一个初始状态
const data = {
  show: true,
};

const TabbarReducer = (prevState = data, action = {}) => {
  // 接收到参数
  // console.log(action);
  let newState = { ...prevState };

  switch (action.type) {
    case "hide-tabbar":
      newState.show = false;
      return newState;
    case "show-tabbar":
      newState.show = true;
      return newState;
    default:
      break;
  }

  return prevState;
};

export default TabbarReducer;
