import React from "react";
import { useQuery, gql } from "@apollo/client";


// !这里有坑，就是必须添加query
const GET_LOCATIONS = gql`
  query getNowplayingList($name: String) {
    getNowplayingList(name: $name) {
      id
      name
    }
  }
`;

export default function Son1(props) {
  // 这里就能接收到client的对象了，但是官方不推荐这种做法
  console.log(props);

  const { loading, error, data, refetch } = useQuery(GET_LOCATIONS, {
    // !记得关闭缓存，否则不会再次发出请求
    fetchPolicy: "no-cache",
    variables: { name },
  });

  if (loading) return <p>等待响应...</p>;
  if (error) return <p>请求错误 :(</p>;

  // console.log(data.getNowplayingList);
  return (
    <div>
      <h1>测试</h1>
      <button
        onClick={() => {
          // !调用这个方法，即可重新请求数据，也可以带入参数
          refetch({
            name: "1111"
          });
        }}
      >
        点我获取子数据
      </button>
      {data.getNowplayingList.map((item) => (
        <span key={item.id}>{item.name}</span>
      ))}
    </div>
  );
}
