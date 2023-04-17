function* test() {
  console.log("11111");
  // 生成器。。。。，next
  let a = yield "111-输出";
  console.log(a);
  let b = yield "222-输出";
  console.log(b);
  let c = yield "333-输出";
  console.log(c);
}


var queue = test()
// 协程的概念。
var res1 = queue.next() // 第一次传参，无法输出
// console.log(res1);
queue.next("我是b")
queue.next("我是c")

// var res4 = queue.next()
// console.log(res4);



