import React, { useState } from "react";

export default function App(props) {
  // 整体刷新
  // console.log("拿到组件传递的参数", props);

  // 给函数式组件赋予状态
  const [state, setstate] = useState("kerwin");
  const [age, setage] = useState(18);
  const [value, setvalue] = useState("");

  // 拿到函数组件状态
  // console.log(state);
  // 拿到改变state的方法
  // console.log(setstate);
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  
  
  
  return (
    <div>
      <div>
        {/* 获取输入框的值 */}
        <input type="text" onChange={handleChange} value={value}/>
        <button onClick={()=>{
          console.log(value);
        }}>click</button>
      </div>

      <div>
        <button
          onClick={() => 
            setstate("你好")
          }
        >
          click
        </button>
        <h2>app-{state}</h2>
      </div>
      <div>
        <button
          onClick={() => {
            setage(0);
          }}
        >
          click
        </button>
        <h2>app-{age}</h2>
      </div>
    </div>
  );
}
