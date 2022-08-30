import React from "react";
import { Counter } from "./mobx/HookStore";
import Class from "./Component/class";
import Func from "./Component/func";

function App() {
  return (
    <div className="App">
      <Counter>
        <Func></Func>
        <Class></Class>
      </Counter>
    </div>
  );
}

export default App;
