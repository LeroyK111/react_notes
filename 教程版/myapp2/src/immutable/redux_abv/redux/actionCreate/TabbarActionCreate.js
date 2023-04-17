function hide(params) {
  return {
    type: "hide-tabbar",
  };
}

function show(params) {
  return {
    type: "show-tabbar",
  };
}


export {show, hide}