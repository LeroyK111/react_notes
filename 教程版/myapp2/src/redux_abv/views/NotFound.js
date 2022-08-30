import React from "react";



function NotFound(props) {
  // 接收到参数,这样一来，props的原型上，就多了两个参数，又多了两个方法
  console.log(props);
  return (
    <div>
      <h1>404</h1>
    </div>
  );
}

function kerwinnconnenct(params, funcs) {
  // 拿到{a:1,b:2}
  var value = params();
  // console.log(value);
  // 接收函数对象
  // console.log(funcs);

  return (NotFound) => {
    return (props) => {
      // console.log("测试一下");
      // console.log(props);
      return (
        <div style={{backgroundColor: "red"}}>
          {/* 这就是传参了 */}
          <NotFound {...value} {...funcs} {...props}/>
        </div>
      );
    };
  };
}

// const d = kerwinnconnenct(() => {
//   return {
//     a: 1,
//     b: 2,
//   };
// });

// console.log("D", d);
// console.log(NotFound);

// !这就是组件的包装，但是必须返回一个func对象，不能是jsx
// export default function New() {
//   return kerwinnconnenct(() => ({
//     a: 1,
//     b: 2,
//   }))(NotFound);
// }

export default kerwinnconnenct(() => {
  return { a: 1, b: 2 };
},{aa(){}, bb(){}})(NotFound);

// export default NotFound;
