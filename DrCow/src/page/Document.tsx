import { css } from "@emotion/react";
import React, { useEffect } from "react";
import SimpleMDE, { type Options } from "simplemde";

export default function Document(props: props) {
  // const { simplemde } = handleCreate("document");
 
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        background-color: #ccc;
        overflow-y: hidden;
      `}
    >
      {/* <div id="document">自己编程</div> */}
      <iframe src="http://192.168.1.12:8866/" css={css`
        width: 100%;
        height: 100%;
        z-index: 1;
      `}></iframe>
    </div>
  );
}
