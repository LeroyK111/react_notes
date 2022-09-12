import { NavLink } from "dva/router";
import React from "react";

// !默认style引用
import style from "./Tabbar.css";

export default function Tabbar() {
  return (
    <footer>
      <ul>
        <ul>
          <li>
            <NavLink to={"/film"} activeClassName={style.active}>film</NavLink>
          </li>
          <li>
            <NavLink to={"/cinema"} activeClassName={style.active}>cinema</NavLink>
          </li>
          <li>
            <NavLink to={"/center"} activeClassName={style.active}>center</NavLink>
          </li>
        </ul>
      </ul>
    </footer>
  );
}
