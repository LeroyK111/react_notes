// @ts-nocheck
import React from "react";
import style from "./css/film.module.css";

// 嵌套子路由
import { NavLink, Outlet } from "react-router-dom";

export default function Film(props) {
  return (
    <div>
      <div className={style.swiper}>
        <div>大轮播</div>
      </div>

      <div className={style.nav}>
        <ul>
          <li>
            <NavLink
              to={"nowplaying"}
              className={({ isActive }) => (isActive ? style.navActive : "")}
            >
              正在热映
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"comingson"}
              className={({ isActive }) => (isActive ? style.navActive : "")}
            >
              即将热映
            </NavLink>
          </li>
        </ul>
      </div>
      {/* 路由容器 */}
      <Outlet />
    </div>
  );
}
