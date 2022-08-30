import React from "react";
import { Counter } from "./mobx/HookStore";
import Class from "./Component/class";
import Func from "./Component/func";

function App() {
  return (
    <div>
      {/* Counter组件，插槽 */}
      <Counter>
        <Func></Func>
        <Class></Class>
      </Counter>
    </div>
  );
}

export default App;
