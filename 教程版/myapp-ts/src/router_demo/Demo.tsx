import React, { useEffect, useState } from "react";
import store from "./redux/store";
import style from "./views/css/demo.module.css";
import IndexRounter from "./router/index";

export default function Demo() {
  const [first, setfirst] = useState(store.getState().isShow);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      // console.log(store.getState().isShow);
      setfirst(store.getState().isShow);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <IndexRounter></IndexRounter>
      {first && (
        <ul className={style.tabbar}>
          <li>电影</li>
          <li>影院</li>
          <li>我的</li>
        </ul>
      )}
    </div>
  );
}
