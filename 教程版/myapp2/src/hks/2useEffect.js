import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  // axios.get("/text.json").then(res=>{
  //   console.log(res);
  //   setfirst(res.data.data.list)
  // })

  const [state, setfirst] = useState([]);

  // 这里只被执行了一次
  useEffect(() => {
    axios.get("/text.json").then(res=>{
      console.log(res);
      setfirst(res.data.data.list)
    })

    
    // return () => {
    //   second;
    // }
  }, []);

  return (
    <div>
      <div>
        {state.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
}
