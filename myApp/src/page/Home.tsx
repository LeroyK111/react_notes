import React, { useEffect,useState } from "react";

export default function home() {
  const [list, setList] = useState([]);

  const fetchList = () => {
    // Simulate fetching data from the server via setTimeout
    setTimeout(() => {
      setList([]);
    }, 1000);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return <div>
    <p>this is home page</p> 
    <div>测试一下&&运算符</div>
    {/* &&则会出现0 */}
    {list.length && <div>1111</div>}
    {/* 转换成bool值，则它不会出现0 */}
    {!!list.length && <div>1111</div>}
    {/* 使用明确的判断 */}
    {list.length>=1 && <div>1111</div>}
    {/* 使用三元表达式 */}
    {list.length?<div>1111</div>:null}
  </div>;
}
