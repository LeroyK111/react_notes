/*
! 创建接口
*/

export default {
  "GET /users": { name: "LeroyK", age: 100 },
  "POST /user/login": (req, res) => {
    console.log(req.body);
    if (req.body.username === "LeroyK" && req.body.password === "123") {
      res.send({
        state: 1,
      });
    } else {
      res.send({
        state: 0,
      });
    }
  },
};
