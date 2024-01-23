// @ts-nocheck
/*
!做路由的导航
*/

import React from "react";
import { NavLink } from "react-router-dom";
import style from "../css/Tabar.module.css"


export default function Tabar() {
  return (
    <div className={style.tabbar}>
      <ul>
        {/* 声明式写法 */}
        <li>
          {/* <a href="#/films" class="active" >电影</a> */}
          <NavLink to="/films" activeClassName={style.tabarActive}>
            电影
          </NavLink>
        </li>
        <li>
          {/* <a href="#/cinemas">影院</a> */}
          <NavLink to="/cinemas" activeClassName={style.tabarActive}>
            影院
          </NavLink>
        </li>
        <li>
          {/* <a href="#/center">我的</a> */}
          <NavLink to="/center" activeClassName={style.tabarActive}>
            我的
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
