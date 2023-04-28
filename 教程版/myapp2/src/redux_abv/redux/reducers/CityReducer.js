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
  city: "北京"
}



const CityReducer = (prevState = data, action={}) => {
  // 接收到参数
  // console.log(action);
  let newState = {...prevState}

  switch (action.type) {
    case "change-city":
      newState.city = action.city
      return newState
    default:
      break;
  }

  return prevState;
};



export default CityReducer;



/*
!这里传入的是数据所在的内存地址，导致obj完全被改变.
* 所以我们需要深层copy原始数据，使用新对象进行处理, 这就是纯函数.

var obj = {myname: "LeroyK"}
function test(obj) {
  obj.myname = "aksldj"
  return obj
}

test(obj)
*/