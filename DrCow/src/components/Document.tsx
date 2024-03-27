import React, { useEffect } from "react";
import { basicSetup, EditorView } from "codemirror";
import { markdown } from "@codemirror/lang-markdown";

export default function Document(props: props) {
  new EditorView({
    doc: "123",
    extensions: [basicSetup, markdown()],
    parent: document.querySelector("#document") as HTMLElement,
  });

  return (
    <div >
      <div id="document"></div>
    </div>
  );
}
