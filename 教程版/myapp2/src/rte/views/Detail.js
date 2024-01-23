import React, { useEffect } from "react";

export default function Detail(props) {
  // 带着路由url带着参数进来
  console.log(props.match.params);
  // 这也是一种方式
  // console.log(props.location.query);

  useEffect(() => {
    console.log("create");
    
    
    return () => {
      console.log("销毁");
    };
  }, []);

  return <div>Detail</div>;
}
