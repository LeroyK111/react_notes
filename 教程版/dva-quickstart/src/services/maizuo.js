import request from "../utils/request";

export function getClinemaListService() {
  return request(
    "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=480211",
    {
      method: "GET",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660212024174976967639041"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }
  );
}
