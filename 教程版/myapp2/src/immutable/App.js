import React, { useState } from 'react'
// 调用深层复制包
import {Map} from 'immutable';

var obj = {
  name: "leroy",
  age: 100
}

var oblImmObj = Map(obj)
var newImmObj = oblImmObj.set("name", "K")
// console.log(oblImmObj, newImmObj);

// 获取值
// console.log(oblImmObj.get("name"));
// console.log(newImmObj.get("name"));
// 转换成js，我获取对象
// console.log(oblImmObj.toJS());
// console.log(newImmObj.toJS());




export default function App() {
  const [first, setfirst] = useState({a:2,b:3})

  const demo = () => {
    var old = Map(first)
    var newData = old.set('a', 1).set('b', 1).toJS()
    // @ts-ignore
    setfirst(newData)
  }

  return (
    <div>
      <button onClick={demo}> click</button>
      {first.a}---{first.b}
    </div>
  )
  
}

