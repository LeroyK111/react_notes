import React, { useState } from "react";
/**
 * @author Leroy
 * 在使用 react 和 TypeScript 开发项目时，很多人都会遇到类型报错的问题。满屏的“类型不匹配”红线不仅打断思路，也让人感到困扰。如果你也曾为ReactNode、JSX.Element 和 ReactElement 这几个类型的选择而纠结，这篇文章或许能帮你理清思路。

先说结论：组件的 props，尤其是 children，建议使用 React.ReactNode；而组件的返回值类型，则应使用 JSX.Element。React.ReactElement 通常只用于一些更复杂或底层的场景。
 * 
*/

function demo() {
  const [V, setV] = useState(2);

  const node: JSX.Element = <p />; // ✅ 正确，只能接受 JSX
  const node2: React.ReactNode = "Hello" || 42 || <p />; // ✅ 正确，可接受多种类型
  interface Props {
    children: React.ReactNode; // ✅ 推荐写法
  }

  const Component: React.FC<Props> = ({ children }) => <p>{children}</p>;

  return (
    <div>
      {V}
    </div>
  );
}

export default demo;
