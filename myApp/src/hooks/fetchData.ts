/**
 * @author Leroy
 * !数据访问层: 负责与应用程序的数据源进行交互。该层负责数据的检索和存储，应与业务逻辑层分开。它应该包括与数据库访问、API 调用和其他外部数据源相关的所有代码。
*/



export default async function fetchData() {
  const response = await fetch(
    "http://127.0.0.1:3333/api"
  ).then((res) => {
    if (res.ok) return res.json();
    return Promise.reject(res);
  });
  return response;
}
