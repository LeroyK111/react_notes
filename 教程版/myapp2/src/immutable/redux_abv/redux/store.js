// @ts-nocheck
/*
! 全局管理中间件redux
*/

import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

/*
! 本质是一个包装过的订阅发布模式，
! store.subscribe() 监听事件
! store.dispatch() 发布事件
! store.getState() 访问最新状态

*/

// 写一个初始状态
// const data = {
//   show: true,
//   city: "北京"
// }

// const reducer = (prevState = data, action={}) => {
//   // 接收到参数
//   // console.log(action);
//   let newState = {...prevState}

//   switch (action.type) {
//     case "hide-tabbar":
//       newState.show = false
//       return newState
//     case "show-tabbar":
//       newState.show = true
//       return newState

//     case "change-city":
//       newState.city = action.city
//       return newState
//     default:
//       break;
//   }

//   return prevState;
// };

//! 不使用上面的全状态，挨个引入子状态，然后进行管理
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemaReducer from "./reducers/CinemaReducer";

// !导入异步状态请求中间件，注册中间件
import reduxThunk from "redux-thunk";
// *这个中间件已经不常用了
import reduxPromise from "redux-promise";

// 引入状态持久化
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// 持久化配置
const persistConfig = {
  key: "root",
  storage,
  // 还可以设置需要持久化的黑白命名空间
  blacklist: ["TabbarReducer"],
  whitelist: ["CityReducer"]
};

// 利用新api直接合并即可，但是状态也会被包裹一层，需要在点一层
const reducer = combineReducers({
  // 其实都传入了，prevState，action这两个值
  CityReducer,
  TabbarReducer,
  CinemaReducer,
});


// 导入状态对象
const persistedReducer = persistReducer(persistConfig, reducer);

// 开启devtools参数，
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 和发布订阅模式，很像，但是更灵活
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk, reduxPromise))
);

let persistor = persistStore(store);

// export default store;
export { store, persistor };

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
