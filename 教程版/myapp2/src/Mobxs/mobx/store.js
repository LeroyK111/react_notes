// @ts-nocheck
import { observable, autorun, configure, action, runInAction } from "mobx";

// !简单写法

const store = observable(
  {
    isShow: true,
    list: [],
    obj: { a: 1, b: 2, c: { a: 2 } },
    // 开启严格模式后，需要写方法，修改全局状态，不然报错
    changeShow() {
      this.isShow = true;
    },
    changeHide() {
      this.isShow = false;
    },
    getList() {
      // 使用runInAction解决异步Promise问题
      runInAction(() => {
        this.list = [1, 2, 3, 4, 5, 6, 7, 8];
      });
    },
  },
  {
    // 激活两个方法
    changeShow: action,
    changeHide: action,
    getList: action,
  }
);

configure({
  // 开启严格模式
  enforceActions: "always",
});

export default store;
