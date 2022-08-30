import React, { useEffect, useState } from "react";

function useCinemaList(params) {
  const [CinemaList, setCinemaList] = useState([...Array(10).keys()]);

  useEffect(() => {
    console.log("这里也会被调用");

    return () => {
      console.log("我被销毁了");
    };
  }, []);

  return {
    CinemaList
  };
}

export default function App() {
  // 可以将逻辑和方法，封装成一个func，然后引入调用即可
  const { CinemaList } = useCinemaList();
  return <div>{CinemaList}</div>;
}
