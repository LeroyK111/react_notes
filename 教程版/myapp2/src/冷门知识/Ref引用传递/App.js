// @ts-nocheck
import React, { Component, useEffect, useRef, useState } from "react";

export default function App() {
  const ss = useRef();

  var element1 = null;

  return (
    <div>
      <button
        onClick={() => {
          // console.log(element1);
          element1.current.focus();
          element1.current.value = "";

          
          // console.log(ss.current.innerHTML);
        }}
      >
        获取焦点
      </button>
      {/* <div ref={ss}>111</div> */}
      <Child
        callback={(element) => {
          // console.log(element);
          element1 = element;
        }}
      ></Child>
    </div>
  );
}

function Child(props) {
  const input = useRef();

  useEffect(() => {
    // !使用回调，传递input
    props.callback(input);
  });

  return (
    <div
      style={{
        background: "yellow",
      }}
    >
      <input type="text" defaultValue={"请输入"} ref={input} />
    </div>
  );
}
