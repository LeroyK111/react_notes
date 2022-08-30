// @ts-nocheck
import React from "react";
import Comingsoon from "./films/Comingsoon";
import Nowlaying from "./films/Nowlaying";





import { Switch, Route, Redirect, NavLink } from "react-router-dom";

// 模块化区别css
import style from "./css/films.module.css"

// 模块化css
console.log(style);

export default function Films() {
  return (
    <div>
      
      <ul>
        <li>
          <NavLink to={"/films/nowlaying"} activeClassName={style.activeTabar}>正在热映</NavLink>
        </li>
        <li>
          <NavLink to={"/films/comingsoon"} activeClassName={style.activeTabar}>即将上映</NavLink>
        </li>
      </ul>
      <Switch>
        {/* 当我使用Route包装时，Route会传递给component属性，props */}
        <Route path={"/films/nowlaying"} component={Nowlaying}></Route>
        <Route path={"/films/comingsoon"} component={Comingsoon}></Route>
        <Redirect from="/films" to="/films/nowlaying" exact></Redirect>
      </Switch>
    </div>
  );
}
