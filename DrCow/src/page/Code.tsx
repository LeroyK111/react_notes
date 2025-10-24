import { css } from "@emotion/react";
import React from "react";

export default function Code(props: props) {
  return     <div
  css={css`
    width: 100%;
    height: 100%;
    background-color: #ccc;
    overflow-y: hidden;
  `}
>
  {/* <div id="document">自己编程</div> */}
  <iframe src="https://ide.judge0.com/" css={css`
    width: 100%;
    height: 100%;
    z-index: 1;
  `}></iframe>
</div>
}
