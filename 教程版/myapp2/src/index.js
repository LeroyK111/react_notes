// @ts-nocheck
import React from "react";
import { createRoot } from "react-dom/client";

// !生命周期
// import App from "./Life/生命周期"
// import App from "./Life/案例1"
// import App from "./Life/运行中的生命周期"
// import App from "./Life/运行周期"
// import App from "./Life/案例2"
// import App from "./Life/运行周期2"
// import App from "./Life/案例3"
// import App from "./Life/销毁周期"

// !两个新生命周期钩子
// import App from "./Life/新生命周期"
// import App from "./Life/案例4"
// import App from "./Life/新性能优化"
// 轮播案例
// import App from "./Life/轮播插件"

//  !hooks用法
// import App from "./hks/1useState"
// import App from "./hks/2useEffect"
// import App from "./hks/3useEffect"
// import App from "./hks/4useEffect"
// import App from "./hks/5useCallback"
// import App from "./hks/6useMemo"
// import App from "./hks/7useRef.js"
// import App from "./hks/8useContext.js"
// import App from "./hks/9useReduce.js"

// !使用useReduce进行状态传递
// import App from "./hks/10案例.js"
// 自定义hooks
// import App from "./hks/自定义.js"

//! 使用路由react-router-dom
// import App from "./rte/App.js"

// !使用redux进行全局状态管理
// import App from "./reduxDemo/App"

// !使用react-redux进行高级全局状态管理
// import App from "./redux_abv/App";
// import { Provider } from "react-redux";
// redux持久化
// import { store, persistor } from "./redux_abv/redux/store";
// import { PersistGate } from "redux-persist/integration/react";

// !直接引入全局css
// import 'antd/dist/antd.min.css';
// !引入antd组件库
// import App from "./antd-ui/App"
// import Grid from "./antd-ui/栅格系统"
// import App from "./antd-ui/画布布局"
// 轮播，时间轴，评论楼等等

// !引入antd移动端ui库
// import App from "./antd-ui-mob/App"
// import App from "./antd-ui-mob/轮播"
// import App from "./antd-ui-mob/选项卡.js"
// import App from "./antd-ui-mob/无限滚动.js"
// import App from "./antd-ui-mob/搜索栏.js"

// !immutable复杂数据类型，深复制
// import App from "./immutable/App.js"
// import App from "./immutable/App2"
// import App from "./immutable/App3.jsx"
// import App from "./immutable/App5.jsx"

// !保护redux中的初始状态
// immutable + redux + react-redux
// import App from "./immutable/redux_abv/App"

// root.render(<App/>)
// root.render(<Grid/>)

// root.render(
//   <Provider store={store}>
//     {/* 再次包装，把持久化方法传入App */}
//     <PersistGate loading={null} persistor={persistor}>
//       {/* 初始化直接包装 */}
//       <App></App>
//     </PersistGate>
//   </Provider>
// );

// !Mobx新全局状态管理器
// import App from "./Mobxs/App";
// import App from "./Mobxs/index.js"

// !样式组件化库
// import App from "./styled-components/App"
// import App from "./styled-components/1透传"
// import App from "./styled-components/2样式化组件"
// import App from "./styled-components/3anime"


// !单元测试
// import App from "./单元测试/App"


// !redux-saga
// import App from "./redux-saga/App"


// !冷门知识
// import App from "./冷门知识/portal/App"
// import App from "./冷门知识/懒加载/App"
// import App from "./冷门知识/Ref引用传递/App"

// import App from "./冷门知识/Ref引用传递/App2"

// import App from "./冷门知识/memo缓存/App"


// !使用graphql接口
import App from "./graphql/App"





const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App></App>);
