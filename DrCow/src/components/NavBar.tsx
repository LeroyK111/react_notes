import React, { useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Li = styled.li<any>`
  background-color: ${(props) => (props.active ? "#b9c0da" : "#63585e")};
  border-radius: 5px;
  width: 3dvw;
  height: 5dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  color: ${(props) => (props.active ? "#63585e" : "#b9c0da")};
  font-weight: bold;
  user-select: none;
  :hover {
    background-color: #b9c0da;
    color: #63585e;
    cursor: pointer;
  }
`;

interface rule {
  navigationSign: string;
  onChange: (value: any) => void;
}

export default function NavBar(props: props & rule) {
  return (
    <div
      css={css`
        position: absolute;
        right: 0;
        top: 50%;
        width: 3dvw;
        height: 20dvh;
        border-radius: 10px 0 0 10px;
        background-color: #dbd5b5;
        transform: translateY(-50%);
        writing-mode: vertical-rl;
        text-orientation: upright;
        white-space: nowrap;
        z-index: 999;
      `}
    >
      <ul
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        `}
      >
        {[
          ["document", "文档"],
          ["flow", "流程"],
          ["code", "代码"],
          ["draw", "草图"],
        ].map((v) => (
          <Li
            active={props.navigationSign === v[0]}
            key={v[0]}
            onClick={() => {
              props.onChange(v[0]);
            }}
          >
            {v[1]}
          </Li>
        ))}
      </ul>
    </div>
  );
}
