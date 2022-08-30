import { autorun, runInAction } from "mobx";
import React, { useEffect, useState } from "react";
import store from "../mobx/store";

export default function Test() {
  const [first, setfirst] = useState(store.list);
  useEffect(() => {
    if (store.list.length === 0) {
      store.getList();
    }

    // 这个还要取消
    var unautorun = autorun(() => {
      setfirst(store.list);
    });

    return () => {
      // 还要记得取消订阅
      unautorun();
    };
  }, []);

  return (
    <div>
      {first.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
