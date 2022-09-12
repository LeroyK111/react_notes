import React, { useEffect, useState } from "react";
import { NavBar, DotLoading } from "antd-mobile";
import { SearchOutline, MoreOutline, CloseOutline } from "antd-mobile-icons";

import { history } from "umi";

// 必须先通过微生成器,配置好插件dva才能调用,直接调用插件dva
import { connect } from "dva";

// const right = (
//   <div style={{ fontSize: 24 }}>
//     <Space style={{ "--gap": "16px" }}>
//       <SearchOutline />
//       <MoreOutline />
//     </Space>
//   </div>
// );

function Cinma(props: any) {
  // 接收到dva hoc组件封装过来的属性值
  // console.log(props.state)
  // console.log(props.state.count);

  const [first, setfirst] = useState<[]>(props.list);

  useEffect(() => {
    if (props.list.length === 0) {
      // console.log("取数据");
      props.dispatch({
        type: "clinema/getList",
        payload: {
          cityId: props.state.count.cityId,
        },
      });
    } else {
      // console.log("缓存");
      setfirst(props.list);
    }
  }, [props.list]);

  return (
    <div>
      <NavBar
        right={<SearchOutline style={{ fontSize: 24, color: "red" }} />}
        back={props.state.count.city}
        backArrow={false}
        onBack={() => {
          // console.log("11");

          // 切换城市记得清空队列list
          props.dispatch({
            type: "clinema/clearList",
          });

          // 跳转后，会刷新count的状态
          history.push("/city");
        }}
        style={{
          fontWeight: "bold",
          borderBottom: "1px solid #ccc",
          backgroundColor: "#ccc",
          position: "fixed",
          width: "100%",
          top: "0",
          zIndex: 998,
          "--height": "45px",
        }}
      >
        影院
      </NavBar>

      {/* 这里就是loading组件 */}
      {props.loading && (
        <div
          style={{
            position: "relative",
            color: "red",
            fontSize: 30,
            top: "50px",
            textAlign: "center",
          }}
        >
          <DotLoading color="currentColor" />
        </div>
      )}

      <ul style={{ position: "relative", top: "45px", paddingBottom: "40px" }}>
        {first.map((item: any) => (
          <li key={item.cinemaId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default connect((state: any) => {
  // console.log(state);
  return {
    msg: "传入状态",
    state,
    // 取巧，直接state中的loading
    loading: state.loading.global,
    list: state.clinema.list,
  };
})(Cinma);
