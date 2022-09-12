import { NavLink, Outlet } from "umi";
import "./index.less";

import style from "./tobar.less";

export default function Layout(props: Object) {
  console.log(props);
  
  return (
    <div>
      <ul className={style.tobbar}>
        <li>
          <NavLink
            to="/film"
            className={({isActive}) => (isActive ? style.active : "")}
          >
            film
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cinma"
            className={({isActive}) => (isActive ? style.active : "")}
          >
            cinma
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/center"
            className={({isActive}) => (isActive ? style.active : "")}
          >
            center
          </NavLink>
        </li>
      </ul>

      {/* 约定式路由 */}
      <Outlet />
    </div>
  );
}
