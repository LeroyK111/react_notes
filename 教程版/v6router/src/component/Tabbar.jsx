// @ts-nocheck
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./css/Tabbar.module.css"


console.log(style);

export default function Tabbar() {
  return (
    <div className={style.footer}>
      <ul>
        <li>
          <NavLink to={"/film"} className={({isActive})=>
           isActive ? style.checknav: ""}>电影</NavLink>
        </li>
        <li>
          <NavLink to={"/cinema"} className={({isActive})=> isActive ? style.checknav: ""}>影院</NavLink>
        </li>
        <li>
          <NavLink to={"/center"} className={({isActive})=> isActive ? style.checknav: ""}>我的</NavLink>
        </li>
      </ul>
    </div>
  )
}
