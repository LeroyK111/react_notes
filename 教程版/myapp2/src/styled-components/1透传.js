// @ts-nocheck
import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  outline: none;
  border-radius: 10px;
  border-bottom: 1px solid red;
`;



// !这里就是传参
const StyledDiv = styled.div`
  background: ${(props) => props.bg || "skyblue"};
  width: 100px;
  height: 100px;
`;

export default function App() {
  return (
    <div>
      {/* 属性可以透传 */}
      <StyledInput type="text" placeholder="输入" />
      <StyledDiv bg={"red"}></StyledDiv>
    </div>
  );
}
