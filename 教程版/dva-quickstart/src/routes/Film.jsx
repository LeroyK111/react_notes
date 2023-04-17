// @ts-nocheck
import React, { useState } from "react";
import { useEffect } from "react";
// 调用框架内的封装
import request from "../utils/request";

import style from "./film.css";

export default function Film(props) {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    request(
      "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6901003",
      {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660212024174976967639041"}',
          "X-Host": "mall.film-ticket.film.list",
        },
        method: "GET",
      }
    ).then((res) => {
      console.log(res.data.data.films);
      setfirst(res.data.data.films);
    });

    return () => {};
  }, []);

  return (
    <div>
      {first.map((item) => (
        <li
          key={item.filmId}
          className={style.film}
          onClick={() => {
            // console.log(props);
            props.history.push(`/detail/${item.filmId}`);
          }}
        >
          <h2>{item.name}</h2>
          <img src={item.poster} alt={item.name} />
        </li>
      ))}
    </div>
  );
}
