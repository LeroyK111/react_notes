import React from "react";
import { withRouter } from "dva/router";
import { useEffect } from "react";
import request from "../utils/request";
export default function Center() {






  return (
    <div>
      <WithRoute></WithRoute>
    </div>
  );
}

function Child(props) {


  // !这里则会存在跨域问题，我们可以配置.webpackrc，进行反向代理
  useEffect(()=>{
    request("/ajax/moreCinemas?movieId=0&day=2022-09-10&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1662750885674&cityId=603&lat=25.0329636&lng=121.5654268&optimus_uuid=0B899750247A11EDB9D3DD31728E241831542FDA7A9C467C9783D841419E4A11&optimus_risk_level=71&optimus_code=10").then(res=>{
      console.log(res.data.cinemas.cinemas);
    })
  }, [])


  return (
    <div>
      <button onClick={() => {
        console.log(props);
        localStorage.removeItem("token")
        props.history.push("/film")
      }}>退出登录</button>
    </div>
  );
}

//! 通过包装，就可以传入props
const WithRoute = withRouter(Child);
