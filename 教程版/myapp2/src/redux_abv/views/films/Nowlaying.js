// @ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, withRouter } from "react-router-dom";

export default function Nowlaying(props) {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1126820",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660212024174976967639041"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      // console.log(res.data.data.films);
      setfirst(res.data.data.films);
    });
  }, []);

  const handleChangePage = (filmId) => {
    // 使用window下的bom跳转页面
    // window.location.href = "#/detail/" + filmId;

    // router原生替换
    // console.log("传递了新的方法", props);
    props.history.push(`/detail/${filmId}`)

    // 不推荐，以下两种方式
    // 带参数跳转url
    // props.history.push({
    //   pathname: "/detail",
    //   query: {
    //     id: filmId,
    //   },
    // });
    // 这也可以传参state
    // props.history.push({pathname:"/detail", state: {
    //   id: filmId
    // }})
  };

  return (
    <div>
      {first.map((item) => (
        // <li
        //   key={item.filmId}
        //   onClick={() => {
        //     handleChangePage(item.filmId);
        //   }}
        // >
        //   {item.name}
        //   {/* <NavLink to={"/detail" + item.filmId}>{item.name}</NavLink> */}
        // </li>

        // 除了这种方式
        <FilmItem key={item.filmId} {...item} {...props}></FilmItem>

        // <withF key={item.filmId} {...item} />
      ))}
    </div>
  );
}

function FilmItem(param) {
  let {name, filmId, history} = param
  // let { name, filmId } = param;
  return (
    <li
      onClick={() => {
        history.push(`/detail/${filmId}`);
      }}
    >
      {name}
    </li>
  );
}

// 包装api，
// const withF = withRouter(FilmItem);
