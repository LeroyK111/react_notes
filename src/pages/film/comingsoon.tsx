import React, { useEffect } from "react";

export default function Comingsoon() {
  useEffect(() => {
    // !解决跨域问题
    fetch(
      "/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=0B899750247A11EDB9D3DD31728E241831542FDA7A9C467C9783D841419E4A11&optimus_risk_level=71&optimus_code=10",
      {
        method: "GET",
        headers: {
          Cookie: "_lxsdk_cuid=182d5321f2dc8-0c8c6715f9d6d7-26021a51-1fe633-182d5321f2d3e; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1661434208; featrues=[object Object]; uuid_n_v=v1; iuuid=0B899750247A11EDB9D3DD31728E241831542FDA7A9C467C9783D841419E4A11; _last_page=c_dmLad; selectci=true; ci=603,Korla; _lx_utm=utm_source=google&utm_medium=organic; _lxsdk=0B899750247A11EDB9D3DD31728E241831542FDA7A9C467C9783D841419E4A11; latlng=12.879721,121.774017,1662969308528; Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2=1662969309; _lxsdk_s=18330b0b6eb-c43-d5f-6d3||26"
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <div>即将开始</div>;
}
