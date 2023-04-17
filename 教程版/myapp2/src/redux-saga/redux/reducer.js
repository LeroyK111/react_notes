let state = {
  list1: [],
  list2: [],
};

function reducer(prevState = state, action = {}) {
  let newprevState = { ...prevState };

  switch (action.type) {
    // 这里被saga拦截了，导致action被干煸
    case "change-list":
      newprevState.list1 = action.payload;
      console.log("改list1");
      return newprevState;
    case "change-list2":
      console.log("改list2");
      newprevState.list2 = action.payload;
      return newprevState;
    default:
      break;
  }

  return prevState;
}

export default reducer;
