import React from 'react'
import {history} from "umi"
export default function Center() {
  return (
    <div><h1>Center</h1>
    <button onClick={()=>{
      localStorage.removeItem("token")
      history.push("/film")
    }}>点我注销登录</button>
    </div>
  )
}
