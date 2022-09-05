import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducer";

// !中间件
import createSagaMiddleware from 'redux-saga';
// import watchSaga from "./saga/saga";
import watchSaga0 from "./sagas";

const sagaMidlle = createSagaMiddleware()

// !中间件
const store = createStore(reducer, applyMiddleware(sagaMidlle));


// !运行监听者
sagaMidlle.run(watchSaga0)


export default store;
