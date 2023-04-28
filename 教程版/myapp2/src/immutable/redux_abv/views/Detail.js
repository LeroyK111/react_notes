import React, { useEffect } from "react";
import { hide, show } from "../redux/actionCreate/TabbarActionCreate";
// import store from "../redux/store";
import { connect } from "react-redux";



function Detail(props) {

  // 解构赋值
  let {match, hide, show} = props
  console.log(props.match);


  useEffect(() => {
    hide();

    return () => {
      show();
    };
  }, [match.params.myid, hide, show]);

  return <div>Detail</div>;
}



// 第一个参数是属性，第二个是回调函数
export default connect(null, {
  // !等于是帮你执行了store.dispatch，并且还传递了hide的参数
  hide,
  show,
})(Detail);
