// @ts-nocheck
import { take, fork, put, call, takeEvery } from "redux-saga/effects";

function* watchSaga(params) {
  // while (true) {
  // take函数，监听组件的发来的action
  // fork函数，同步执行异步处理函数

  // yield take("get-list");

  // yield fork(getList);

  // }
  // 语法糖
  yield takeEvery("get-list", getList);
}

function* getList(params) {
  // 异步处理

  // call函数,传入promise对象
  let res = yield call(get);

  // put函数发出新的action
  yield put({
    type: "change-list",
    payload: res,
  });
}

function get(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["1111", "222", "仿造"]);
    }, 1000);
  });
}

export default watchSaga;
export {getList}