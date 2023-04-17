import React from "react";
import { useParams } from "umi";

export default function Detail(props: Object) {

  // 这样一来，就可以跳过props
  const params = useParams();

  return (
    <div>
      <h1>detail</h1>
      <p>{params.myid}</p>
    </div>
  );
}
