// @ts-nocheck
import React, { useState } from "react";
import { InfiniteScroll, List } from "antd-mobile";
import { mockRequest } from "./mock-request";

export default function App() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  async function loadMore() {
    const append = await mockRequest();
    setData((val) => [...val, ...append]);
    setHasMore(append.length > 0);
  }

  return (
    <div>
      <List>
        {data.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
      {/* 这里就可以放入下拉监听 */}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
}
