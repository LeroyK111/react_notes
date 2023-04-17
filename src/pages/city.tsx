import React, { useEffect, useState } from "react";
import { IndexBar, List, NavBar } from "antd-mobile";
import { connect, history } from "umi";

interface itemRule {
  cityId: number;
  name: string;
}
const filterCity = (city: []) => {
  // console.log(city);
  const letterArr: Array<string> = [];

  const newList = [];
  for (let i: number = 65; i < 91; i++) {
    letterArr.push(String.fromCharCode(i));
  }
  // console.log(letterArr);

  for (let m of letterArr) {
    city.length &&
      newList.push({
        title: m,
        items: city.filter(
          (item: any) => item.pinyin.substring(0, 1).toUpperCase() === m
        ),
      });
  }

  // console.log(newList);
  return newList;
};

function city(props: any) {
  const [groups, setgroups] = useState<any>([]);

  useEffect(() => {
    fetch("https://m.maizuo.com/gateway?k=8892486", {
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660212024174976967639041"}',
        "X-Host": "mall.film-ticket.city.list",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // res.data.cities;
        let data = filterCity(res.data.cities);
        // console.log(data);
        setgroups(data);
      });
  }, []);

  const changeCity = (item: itemRule) => {
    // console.log(item.cityId, item.name);
    // * 测试能不能接收到状态
    // console.log(props);
    props.dispatch({
      type: "count/chanageCity",
      payload: {
        city: item.name,
        cityId: item.cityId,
      },
    });

    // 状态一改，直接返回之前的页面
    history.push("/cinma");
  };

  return (
    <div>
      <div style={{ height: "100px" }}>
        <NavBar
          back="返回"
          onBack={() => {
            history.back();
          }}
          style={{ "--height": "40px", "--border-bottom": "1px solid #ccc" }}
        >
          城市
        </NavBar>
        <span style={{ height: "60px" }}>选择你的城市xxxx</span>
      </div>
      <div style={{ height: window.innerHeight - 100, overflow: "hidden" }}>
        <IndexBar>
          {groups.map((group: any) => {
            // console.log(group);
            let { title, items } = group;
            return (
              <IndexBar.Panel
                index={title}
                title={`字母${title}`}
                key={`${title}`}
              >
                <List>
                  {items.map(({ cityId, name }: itemRule) => (
                    <List.Item
                      onClick={() => {
                        // !设置城市点击事件
                        // console.log(name);
                        changeCity({ cityId, name });
                      }}
                      key={cityId}
                    >
                      {name}
                    </List.Item>
                  ))}
                </List>
              </IndexBar.Panel>
            );
          })}
        </IndexBar>
      </div>
    </div>
  );
}

export default connect(() => ({}))(city);
