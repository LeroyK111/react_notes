import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Comingsoon() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get(
        "/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=0B899750247A11EDB9D3DD31728E241831542FDA7A9C467C9783D841419E4A11&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        console.log(res.data)
      });
  }, []);

  // 跨域只存在于浏览器端,我们使用反向代理
  return <ul>1111</ul>;
}
