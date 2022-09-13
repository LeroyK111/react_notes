// @ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
import FilmItem from "./FilmItem";

export default function Nowplaying() {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4125569",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660212024174976967639041"}',
        "X-Host": "mall.film-ticket.film.list",
      },
      method: "GET",
    }).then((res) => {
      setfirst(res.data.data.films);
    });
  }, []);



  return (
    <div>
      <ul>
        {first.map((item) => (
          <FilmItem key={item.filmId} {...item}/>
        ))}
      </ul>
    </div>
  );
}
