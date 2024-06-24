/**
 * @author Leroy
 * 测试一下原编程的技巧
 */

// @ts-nocheck
import React, { useRef, useEffect, forwardRef, useState } from "react";
import useTest from '../hooks/useTest'
// 动态创建 HTML 元素
const DynamicHTMLElement = forwardRef((props, ref) => {
  let obj = { ref };
  for (const key in props) {
    if (!["type", "children"].includes(key)) {
      obj[key] = props[key];
    }
  }
  return React.createElement(props.type, obj, props.children);
});





const testCreate = () => {
  // 调用钩子，
  const Test = useTest()
  useEffect(() => {
    setTimeout(() => {
      Test.diyEvent(123123)
    }, 1000);
    
  }, [])
  


  const handleEle = useRef(null);
  const [first, setfirst] = useState(1);

  useEffect(() => {
    console.log(handleEle.current);
  }, [handleEle]);

  useEffect(() => {
    console.log(first);
    
  }, [first])
  

  return (
    <>
      <DynamicHTMLElement
        ref={handleEle}
        type="button"
        onClick={() => {
          console.log(1111);
        }}
      >
        {first}
      </DynamicHTMLElement>
      <br />
      <button
        onClick={() => {
          setfirst((v) => {
            v += 1;
            return v
          });
        }}
      >
        点我改变前一个按钮
      </button>
    </>
  );
};

export default testCreate;
