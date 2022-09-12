/*
!测试固定数据，
*/

export default {
  "GET /users": { name: "Leroy", age: 100, location: "as" },

  // !直接接收数据
  "POST /users/login": (req, res) => {
    console.log("接收到的数据", req.body);
    res.send({
      ok: 1,
    });
  },
};
