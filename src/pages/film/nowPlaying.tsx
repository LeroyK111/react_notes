import React, { useEffect, useState } from "react";
import { history } from 'umi';



interface rule {
  filmId: string;
  name: string;
}

export default function NowPlaying(props: Object) {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    fetch(
      "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=820588",
      {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660212024174976967639041"}',
          "X-Host": "mall.film-ticket.film.list",
        },
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.films);
        setfirst(res.data.films);
      });
  }, []);

  return (
    <div>
      {first.map((item: rule) => (
        <li key={item.filmId} onClick={()=>{
          history.push(`/detail/${item.filmId}`)
        }}>{item.name}</li>
      ))}
    </div>
  );
}
