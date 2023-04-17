export default {
  // 不写spacename，则默认为文件名
  namespace: "clinema",
  state: {
    list: [],
  },
  // 构建生成器
  effects: {
    *getList(action: any, obj: any): any {
      // console.log(action, obj);
      let { put, call } = obj;

      // 切换城市后，传参
      // console.log("接收到城市切换", action.payload.cityId);

      let res = yield call(getListCinema, action.payload.cityId);
      // console.log(res.data.cinemas);
      yield put({
        type: "changeList",
        payload: res.data.cinemas,
      });
    },
  },

  // 状态方法
  reducers: {
    changeList(prevState: any, action: any) {
      return { ...prevState, list: action.payload };
    },

    clearList(prevState: any, action: any) {
      return { ...prevState, list: [] };
    },
  },
};

async function getListCinema(cityId: number) {
  // console.log("测试", cityId);

  let res = await fetch(
    `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=3067204`,
    {
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660212024174976967639041"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res);

  return res;
}
