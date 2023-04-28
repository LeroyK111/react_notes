import express from "express";
import cors from "cors";

const app = express();
const port = 3333;
const host = "127.0.0.1";

app.use(cors());

// jsonp实现
app.get("/api", (req, res) => {
  const data = JSON.stringify({
    id: 1,
    name: "leroy",
    email: "leroy@gmail.com",
  });

  res.setHeader("Content-Type", "application/json");
  

  res.send(data);
});

app.listen(port, host, () => {
  console.log(`Example app listening on port http://${host}:${port}`);
});
