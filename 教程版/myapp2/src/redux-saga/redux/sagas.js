
import {all} from "redux-saga/effects"
import watchSaga1 from "./saga/2saga"
import watchSaga from "./saga/saga"


function *watchSaga0(params) {
  // 聚合
  yield all([watchSaga1(), watchSaga()])
}


export default watchSaga0


