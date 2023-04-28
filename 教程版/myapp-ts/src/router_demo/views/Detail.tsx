import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import store from "../redux/store";

// extend继承，也好
interface rule {
  myid: string;
}

// 这种接口继承也行
export default function Detail(props: RouteComponentProps<rule>) {
  useEffect(() => {
    store.dispatch({
      type: "hide",
    });

    return () => {
      store.dispatch({
        type: "show",
      });
    };
  }, []);

  return <div>{props.match.params.myid}</div>;
}
