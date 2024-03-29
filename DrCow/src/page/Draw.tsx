import React from "react";
import { css } from "@emotion/react";

export default function Draw(props: props) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow-y: hidden;
      `}
    >
      {/* <Excalidraw>需要集成</Excalidraw> */}
      <iframe
        src="http://192.168.1.12:8867/"
        css={css`
          width: 100%;
          height: 100%;
          z-index: 1;
        `}
      ></iframe>
    </div>
  );
}
