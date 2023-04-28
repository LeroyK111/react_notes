import React from "react";
import { connect } from "dva";
import { useEffect } from "react";

function Cinema(props) {
  useEffect(()=>{
    if (props.list.length === 0) {
      props.dispatch({
        type: "maizuo/getClinemaList"
      })
    } else {
      console.log("缓存");
    }

  }, [])
  return <div>
    <ul>
      {
        props.list.map(item=>
        <li key={item.cinemaId}>{item.name}</li>
          )
      }
    </ul>
  </div>;
}

export default connect((state) => ({ list: state.maizuo.list }))(Cinema);
