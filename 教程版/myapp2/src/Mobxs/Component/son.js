import React from 'react'
import store from "../mobx/store"

export default function Son() {

  return (
    <div>
      <button onClick={()=>{
        store.changeHide()
      }}>点我隐藏</button>
      <div style={{width: '200px', height: '200px', backgroundColor: 'red'}}>子组件</div>
    </div>
  )
}
