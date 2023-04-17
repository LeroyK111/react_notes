/*
!核心原理
*/


var bus = {
  taskList: [],
  result: [],
  // 订阅
  subscribe(callback) {
    this.taskList.push(callback);
  },

  // 发布
  publish(data) {
    // 遍历所有列表
    this.taskList.forEach((callback) => {
      this.result = callback && callback();
    });
    // 每当我触发完成，我就删除最后一个task
    this.taskList.pop()
    
    return this.result
  },
};

export default bus;
