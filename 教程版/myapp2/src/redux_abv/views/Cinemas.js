import React, { useEffect, useState } from "react";
import {store} from "../redux/store";
import { getCinemaListAction, getCinemaListAction2 } from "../redux/actionCreate/request";
export default function Cinemas(props) {
  const [first, setfirst] = useState(store.getState().CityReducer.city);
  const [second, setsecond] = useState(store.getState().CinemaReducer.list);

  useEffect(() => {
    // 这里是一个空数组
    let data = store.getState().CinemaReducer.list;
    if (data.length === 0) {
      // 去请求数据
      store.dispatch(
        // 这里actionCreator里写异步请求
        // getCinemaListAction()
        getCinemaListAction2()
      );
    }

    // 重复订阅多次
    const unsubscribe = store.subscribe(()=>{
      setsecond(store.getState().CinemaReducer.list)
    })

    // 销毁订阅
    return ()=>{
      // 利用返回函数，进行销毁
      unsubscribe()
    }

  }, []);

  return (
    <div>
      <div
        onClick={() => {
          props.history.push(`/city`);
        }}
      >{first}</div>
      {second.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
