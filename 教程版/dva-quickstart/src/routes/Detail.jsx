import React from "react";

import {connect} from "dva"
import { useEffect } from "react";





function Detail(props) {
  // console.log(props.match.params);

  useEffect(()=>{
    console.log(props);
    props.dispatch({
      type: "maizuo/hide"
    })

    return ()=>{
      props.dispatch({
        // !默认调用里面的show方法
        type: "maizuo/show"
      })
    }

  }, [])


  return (
    <div>
      <h1>Detail</h1>
      <p>{props.match.params.myid}</p>
    </div>
  );
}



export default connect()(Detail)