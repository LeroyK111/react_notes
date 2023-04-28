// @ts-nocheck
import React, { Component } from "react";
// !引入子组件
import Son1 from "./component/son1";
import Son2 from "./component/son2";

// !引入GraphiQL库
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

// !实例化客户端
const client = new ApolloClient({
  // 访问接口，服务端要解决跨域cors
  uri: "http://127.0.0.1:3000/graphql",
  // 使用缓存
  cache: new InMemoryCache(),
});

export default class App extends Component {
  render() {
    return (
      // 使用上下文传递，client对象，让所有的子组件都可用
      <ApolloProvider client={client}>
        <div>
          <div>
            <button
              onClick={() => {
                this.clickGet();
              }}
            >
              点我获取数据
            </button>
          </div>
          <div style={{ background: "red" }}>
            {/* 使用这种方式，也可以直接传入client对象 */}
            <Son1 client={client}></Son1>
            <Son2></Son2>
          </div>
        </div>
      </ApolloProvider>
    );
  }

  clickGet() {
    // ?使用官方推荐的方法进行查询，graphql-tag方法放在子组件内
    client
      .query({
        query: gql`
          {
            getNowplayingList {
              id
              name
            }
          }
        `,
      })
      .then((result) => console.log(result.data.getNowplayingList));
  }
}
