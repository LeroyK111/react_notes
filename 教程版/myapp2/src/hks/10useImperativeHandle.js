// @ts-nocheck
import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
  useEffect,
} from "react";

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [value, setValue] = useState(1);

  /**
    inputRef: 子组件内部的 ref，用于引用实际的 input 元素。

    useImperativeHandle: 
    暴露 focus 和 clear 方法，使父组件可以操作 input 元素。父组件: 通过 useRef 获取子组件的 ref 并调用暴露的方法。
  */

  useImperativeHandle(ref, () => ({
    // 暴漏方法
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
    // 可以间接的暴漏状态: 但是无法监听哦
    getState: () => value,
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
});

const ParentComponent = () => {
  const childRef = useRef();

  useEffect(() => {
    console.log(childRef.current.getState());
  }, []);


  // 无法监听呢
  // useEffect(() => {
  //   console.log(childRef.current.getState());
  // }, [childRef.current.getState()]);



  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={() => childRef.current.focus()}>Focus Input</button>
      <button onClick={() => childRef.current.clear()}>Clear Input</button>
    </div>
  );
};

export default ParentComponent;
