import React from "react";

export default function NavBar(props: props) {
  console.log(props);
  setTimeout(() => {
    props.onChange("nihao");
  }, 1000);

  return (
    <div className={props.className}>
      <ul>
        <li ></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
