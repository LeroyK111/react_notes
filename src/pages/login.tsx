import React, { useState, useEffect } from "react";
import { history } from "umi";

function login(username: string, password: string): any {
  return fetch("/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((res) => res.state);
}

export default function Login(props: any) {
  const [first, setfirst] = useState("用户名");
  const [two, settwo] = useState("密码");

  useEffect(() => {
    // fetch("/users")
    //   .then((res) => res.json())
    //   .then((res) => {console.log(res)});
  }, []);

  return (
    <div>
      <h1>登录界面</h1>
      输入用户名：
      <input
        type="text"
        onChange={(e) => setfirst(e.target.value)}
        defaultValue={first}
      />
      输入密码：
      <input type="text" onChange={(e) => settwo(e.target.value)} defaultValue={two} />
      <button
        onClick={async () => {
          let res = await login(first, two);
          console.log("返回值", res);
          
          if (res === 1) {
            localStorage.setItem("token", first);
            history.push("/center");
          } else {
            alert("用户密码不对");
          }
        }}
      >
        点我登录
      </button>
    </div>
  );
}
