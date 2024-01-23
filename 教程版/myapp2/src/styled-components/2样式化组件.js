import React from "react";
import styled from "styled-components";

// !甚至可以包装子组件，然后通过props传参
const StyleChild = styled(Child)`
  background: yellow;
  font-size: 20px;
`;

// !继承样式
const StyleButton = styled.button`
  width: 100px;
  height: 100px;
  background: red;
`;

const StyleButton2 = styled(StyleButton)`
  background: yellow;
`;

export default function App() {
  return (
    <div>
      <StyleButton></StyleButton>
      <StyleButton2></StyleButton2>
      <StyleChild></StyleChild>
    </div>
  );
}

function Child(props) {
  return <div className={props.className}>child</div>;
}
