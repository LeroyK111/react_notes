import React, { createContext } from "react";
import { useLocalObservable, observer } from "mobx-react-lite";

// 状态树
export const MyContext = createContext(null);


/*
!observer 将一个组件转换成反应式组件，
!useLocalObservable 创建具有给定属性，方法，和计算值的可观察对象
*/
export const Counter = observer((props) => {
  

  // 创建全局状态和全局方法
  const store = useLocalObservable(() => ({
    count: 1,
    // 默认返回的get参数
    get getCount() {
      return store.count;
    },
    handleCount() {
      store.count += 2;
    },
  }));


  return (
    // 让真正的子组件被包裹起来，并且使用状态树传递给所有子组件
    <MyContext.Provider value={store}>{props.children}</MyContext.Provider>
  );
});
