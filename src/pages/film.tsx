import { useRouteData } from "@/.umi/exports";
import { Outlet, NavLink } from "umi";

import "./less/film.less";

const swiperCss: Object = {
  width: "100%",
  height: "200px",
  backgroundColor: "pink",
};

export default function Film() {
  const route = useRouteData();
  console.log(route);

  return (
    <div>
      <h1>Film首页</h1>
      <div style={swiperCss}>大轮播</div>
      {/* 使用Outlet即可，自动嵌套film的路由 */}
      <div className="FilmTabbar">
        <li>
          <NavLink to={"/film/nowplaying"}>正在热映</NavLink>
        </li>
        <li>
          <NavLink to={"/film/comingsoon"}>即将上映</NavLink>
        </li>
      </div>

      <Outlet />
    </div>
  );
}
