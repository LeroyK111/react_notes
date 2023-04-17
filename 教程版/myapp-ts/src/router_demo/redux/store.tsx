import { legacy_createStore as createStore } from "redux";

interface RuleActive {
  type: string;
  // !使用？可以确保当方法和属性不存在时，不报错
  payload?: any;
}

interface RulePrev {
  isShow: boolean;
}

let state = {
  isShow: true,
};

const reducer = (prevState: RulePrev = state, active: RuleActive) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { type, payload } = active;

  // 不改变初始状态，我们需要重新赋值
  const newState = { ...prevState };

  switch (type) {
    case "show":
      newState.isShow = true;
      return newState;
    case "hide":
      newState.isShow = false;
      return newState;
    default:
      return prevState;
  }
};

const store = createStore(reducer);

export default store;
