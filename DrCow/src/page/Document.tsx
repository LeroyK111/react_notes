import React, { useEffect } from "react";
import SimpleMDE, { type Options } from "simplemde";
// import { basicSetup, EditorView } from "codemirror";
// import { markdown } from "@codemirror/lang-markdown";

// const handleCreate = (id: string) => {
//   const Options: Options = {
//     element: document.getElementById(id) as HTMLElement,
//   };
//   const simplemde = new SimpleMDE(Options);

//   return { simplemde };
// };

export default function Document(props: props) {
  // const { simplemde } = handleCreate("document");
 
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <div id="document">document</div>
    </div>
  );
}
