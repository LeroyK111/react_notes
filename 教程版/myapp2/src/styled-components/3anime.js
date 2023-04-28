import React from "react";
import styled, { keyframes } from "styled-components";




const myanimetion = keyframes`
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
`;
const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background: yellow;
  animation: ${myanimetion} 1s linear infinite ;
`;



export default function App() {
  return (
    <div>
      <StyledDiv></StyledDiv>
    </div>
  );
}
