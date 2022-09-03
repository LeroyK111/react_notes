import React, { useRef, useState } from 'react'

interface rule {
  name: string
}



export default function FuncTs(props: rule) {
  // !直接解决props属性传参，约束类型

  // !可以直接给组件状态写好约束，当然也可以不写约束类型，ts回自己推断
  const [first, setfirst] = useState<string>("asdflksdjlk")

  // !ref标记也是这么写
  const myref = useRef<HTMLInputElement>(null)

  return (
    <div>
      {first.substring(0,1).toUpperCase()+first.substring(1)}
      <button onClick={()=>{
        setfirst("leroyk")
      }}>click</button>

      <div style={{backgroundColor: "skyblue", height: "100px"}}>
        <input type="text" ref={myref}/>
        <button onClick={()=>{
          // !依然要使用断言
          console.log((myref.current as HTMLInputElement).value);
        }}>click</button>
      </div>
      <div style={{backgroundColor: "red", height: "100px"}}>
          接收传来的参数: {props.name}
      </div>
    </div>
  )
}

// 这也是一种写法
// const Child1: React.Fc<rule> = (props) => {
//   return <div>1111</div>
// }