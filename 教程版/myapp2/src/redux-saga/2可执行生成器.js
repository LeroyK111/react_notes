// @ts-nocheck
function name0(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 返回成功值，data1
      resolve("data1");
    }, 1000);
  });
}

function name2(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data2");
    }, 1000);
  });
}

function name3(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data3");
    }, 1000);
  });
}

function* gen() {
  var f1 = yield name0();
  console.log(f1);
  var f2 = yield name2(f1);
  console.log(f2);
  var f3 = yield name3(f2);
  console.log(f3);
}

function run(func) {
  var g = func();

  function Next(data=null) {
    var result = g.next(data);
    if (result.done) {
      return result.value;
    }
    result.value.then((res) => {
      Next(res);
    });
  }
  Next();
}

run(gen);
