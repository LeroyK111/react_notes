import React from "react";
import Redirect from "../component/Redirect";

function AuthComponent({ children }) {
  const isLogin = localStorage.getItem("token");
  return isLogin ? children : <Redirect to={"/login"}></Redirect>;
}


export default AuthComponent