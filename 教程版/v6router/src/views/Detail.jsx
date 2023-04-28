// @ts-nocheck

import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Detail(props) {
  // console.log(props); // !不通过props传参...

  // 这样一来就可以截取url进行取数据
  // console.log(window.location.href.split("http://localhost:3000/detail?")[1].replace("filmId=", ""));

  const [first, setfirst] = useState();

  // 直接使用钩子函数，获取路由传参
  const [searchParams, setsearchParams] = useSearchParams();
  // console.log(searchParams.get("filmId"));

  // !基于v5路由传参，也是得使用专门的钩子
  const Params = useParams();

  useEffect(() => {
    // setfirst(searchParams.get("filmId"));

    setfirst(Params.filmId)
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <span>{first}</span>
      <button
        onClick={() => {
          // 重新赋值，并刷新url页面
          // setsearchParams({filmId: 20222})
        }}
      >
        猜你喜欢
      </button>
    </div>
  );
}
