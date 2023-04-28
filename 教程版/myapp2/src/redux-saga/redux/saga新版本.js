import { all, takeEvery } from "redux-saga/effects";
import watchSaga1, { getList1 } from "./saga/2saga";
import watchSaga, { getList } from "./saga/saga";

function* watchSaga0(params) {
  // 聚合，不适用all
  yield takeEvery("get-list2", getList1);
  yield takeEvery("get-list", getList);
}

export default watchSaga0;
