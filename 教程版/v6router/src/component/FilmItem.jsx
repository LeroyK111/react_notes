import React from "react";
import { useNavigate } from "react-router-dom";

/*
!制作公共组件，尽可能不适用class组件。
*/

export default function FilmItem(props) {
  // !这里就没有props.location

  // !坑，useNavigate必须放入组件内部才能生效
  const navigate = useNavigate();

  function handleChangePage(filmId) {
    // *跳转页面,路由传参
    // navigate(`/detail?filmId=${filmId}`, { replace: true });

    // ?使用query url get 传参
    // navigate(`/detail?filmId=${filmId}`)

    // !老方法
    navigate(`/detail/${filmId}`);
  }

  return <li onClick={()=>{
    handleChangePage(props.filmId)
  }}>{props.name}</li>;
}
