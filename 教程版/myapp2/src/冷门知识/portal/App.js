// @ts-nocheck
import React, { useState } from "react";
import "./App.css";
// import Dialog from './components/Dialog'
import Dialog from "./components/protalDialog";

export default function App() {
  const [first, setfirst] = useState(false);

  return (
    <div onClick={()=>{
      console.log("也会事件冒泡");
    }}>
      <div className="box">
        <div className="left"></div>
        <div className="right">
          <button
            onClick={(e) => {
              // 阻止事件冒泡
              e.stopPropagation()
              setfirst(true);
            }}
          >
            ajax
          </button>
          {first && <Dialog close={setfirst}>
            <h1>插槽</h1>
          </Dialog>}
        </div>
      </div>
    </div>
  );
}
