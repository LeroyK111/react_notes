// @ts-nocheck
import React, { useState } from "react";

export default function App() {
  const [first, setfirst] = useState([111, 222, 333, 444]);

  const [text, settext] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          settext(e.target.value);
        }}
        value={text}
      />

      <button
        className="add"
        onClick={() => {
          setfirst([...first, text]);
        }}
      >
        add
      </button>

      <ul>
        {first.map((item, index) => (
          <li key={index} >
            {item}
            <button className="del" onClick={()=>{
              var newlist = [...first]
              newlist.splice(index, 1)
              setfirst(
                newlist
              )
            }}>del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
