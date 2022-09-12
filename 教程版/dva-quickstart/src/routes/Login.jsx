import request from '../utils/request';
import React from 'react'

export default function Login(props) {
  return (
    <div>
      {/* 点我登录 */}
      <button onClick={()=>{
        localStorage.setItem("token", "adsf");
        props.history.push(`/center`);

        request("/users/login", {
          method: "POST",
          body: JSON.stringify({
            username: "LeroyK",
            password: "123",
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res=>{console.log(res.data)})
      }}>登录</button>
    </div>
  )
}
