// @ts-nocheck
import React from "react";
import { Route } from "react-router-dom";
import Test from "../views/Test";



export default function Center(props) {
  return (
    <div>
      <h1>测试Center</h1>
      {/* 这里一般也需要switch和重定向 */}
      <Route path="/center/api" component={Test} />

      <div onClick={()=>{
        props.history.push(`/filmsorder`)
        
      }}>电影订单</div>
    </div>
  );
}



