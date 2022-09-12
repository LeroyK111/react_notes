import { getClinemaListService } from "../services/maizuo";

export default {
  namespace: "maizuo",

  state: {
    isShow: true,
    list: [],
  },

  reducers: {
    // !同步.直接把状态改变的方法封装了，
    hide(prevState, action) {
      return { ...prevState, isShow: false };
    },
    show(prevState, action) {
      return { ...prevState, isShow: true };
    },
    changeCinemaList(prevState, action) {
      return { ...prevState, list: action.payload };
    },
  },

  // !订阅函数.
  subscriptions: {
    setup({ dispatch, history }) {
      console.log("初始化");
    },
  },

  // !异步.
  effects: {
    *getClinemaList(action, { call, put }) {
      // call方法做异步处理
      const res = yield call(getClinemaListService);
      console.log(res.data.data.cinemas);
      yield put({
        type: "changeCinemaList",
        payload: res.data.data.cinemas,
      });
    },
  },
};
