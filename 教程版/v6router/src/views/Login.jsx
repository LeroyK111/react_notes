// @ts-nocheck
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const inputRef = useRef(null);
  let navigate = useNavigate()
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // console.log(inputRef.current?.value);
          localStorage.setItem("token", inputRef.current?.value);
          navigate("/center")
        }}
      >
        登录
      </button>
    </div>
  );
}
