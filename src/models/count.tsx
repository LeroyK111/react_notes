/*
!默认是约定式的写法，只要放入pages/models/* or models/*
!具体的请求，则可以放入/services/*中
*/

export default {
  namespace: "count",
  state: {
    city: "北京",
    cityId: 110100,
  },

  reducers: {
    // !具体改变状态的方法
    chanageCity(prevStort: any, action: any) {
      // console.log(action);
      return { ...prevStort, ...action.payload };
    },
  },

  effects: {
    // !异步请求
  },

  test(state: Object) {
    // !测试里面的方法调用
    console.log("test");
    return state;
  },
};
