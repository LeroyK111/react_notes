// @ts-nocheck
import { take, fork, put, call } from "redux-saga/effects";

function* watchSaga1(params) {
  // while (true) {
  //   // take函数，监听组件的发来的action
  //   // fork函数，同步执行异步处理函数

  //   yield take("get-list2");

  //   yield fork(getList1);
  // }

  // 语法糖
  yield takeEvery("get-list2", getList1);
}

function* getList1(params) {
  // 异步处理

  // call函数,传入promise对象
  let res = yield call(get1);
  // 接力处理
  res = yield call(get2, res);

  // put函数发出新的action
  yield put({
    type: "change-list2",
    payload: res,
  });
}

function get1(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["1111", "222", "仿造"]);
    }, 1000);
  });
}

function get2(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...params, "接力"]);
    }, 1000);
  });
}

export default watchSaga1;
export {getList1}