import React, { useEffect } from "react";
import { hide, show } from "../redux/actionCreate/TabbarActionCreate";
import store from "../redux/store";

export default function Detail(props) {
  // 带着路由url带着参数进来
  // console.log(props.match.params);
  // 这也是一种方式
  // console.log(props.location.query);

  useEffect(() => {
    // 监听store的状态
    // store.dispatch({
    //   // 把action发出去
    //   type: "hide-tabbar",
    // });

    store.dispatch(hide())


    return () => {
      // 监听store的状态
      // store.dispatch({
      //   // 把action发出去
      //   type: "show-tabbar",
      // });

      store.dispatch(show())
    };
  }, []);
  

  return <div>Detail</div>;
}
