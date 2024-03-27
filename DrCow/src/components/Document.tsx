import React, { useEffect } from "react";
import SimpleMDE, { type Options } from "simplemde";

export default function Document(props: props) {
  const Options: Options = {
    element: document.querySelector("#document") as HTMLElement,
  };
  const simplemde = new SimpleMDE(Options);

  return (
    <div className={props.className}>
      <div id="document"></div>
    </div>
  );
}
