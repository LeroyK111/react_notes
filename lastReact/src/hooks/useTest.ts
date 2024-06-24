/**
 * @author Leroy
 * 测试函数钩子
 */

import React, { useEffect, useState } from "react";

export default (props: any) => {
  const [first, setFirst] = useState("2");

  // 狗子函数，海曙
  console.log(props);
  
  

  useEffect(() => {
    console.log("一样会生效");
  }, [first]);

  const diyEvent = (v: string) => {
    setFirst(v);
  };

  return { setFirst, first, diyEvent };
};
