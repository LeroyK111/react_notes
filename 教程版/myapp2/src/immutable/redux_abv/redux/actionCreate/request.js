import axios from "axios";

// 这是一种方法
function getCinemaListAction(params) {
  // 解决不了异步，
  // axios({
  //   url:"/text.json",
  //   method: "get",
  // }).then(res=>{
  //   return {
  //     type: "change-list",
  //     list: res.data.data.list
  //   }
  // })

  return (dispatch) => {
    // 解决方式
    axios({
      url: "/text.json",
      method: "get",
    }).then((res) => {
      // console.log(res.data.data.list);
      dispatch({
        type: "change-list",
        list: res.data.data.list,
      });
    });
  };
}

// 这个就是使用redux-promise的方法
function getCinemaListAction2(params) {
  return axios({
    url: "/text.json",
    method: "get",
  }).then((res) => {
    // console.log(res.data.data.list);
    return {
      type: "change-list",
      list: res.data.data.list,
    };
  });
}

export { getCinemaListAction, getCinemaListAction2 };
