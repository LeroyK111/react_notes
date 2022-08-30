import React, { createContext } from "react";
import { useLocalStore, observer } from "mobx-react-lite";

// 状态树
export const MyContext = createContext(null);


export const Counter = observer((props) => {
  const store = useLocalStore(() => ({
    count: 1,
    // 取值用法object，
    get getCount() {
      return store.count;
    },
    handleCount() {
      store.count += 2;
    },
  }));


  return (
    <MyContext.Provider value={store}>{props.children}</MyContext.Provider>
  );
});
