import React, { useState } from "react";
import store from "../redux/store";
export default function City(props) {
  const [first, setfirst] = useState(["北京", "上海", "深圳", "广州"]);
  return (
    <div>
      <ul>
        {first.map((item) => (
          <li key={item} onClick={()=>{
            store.dispatch({
              type: "change-city",
              city: item
            })

            props.history.push("/cinemas")
          }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
