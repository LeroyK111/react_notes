// @ts-nocheck
import React, { Suspense } from "react";
/*
!组件懒加载
*/
export default function Lazyload(path) {
  const Comp = React.lazy(() => import(`../views/${path}`));
  return (
    <Suspense fallback={<div>加载中....</div>}>
      <Comp></Comp>
    </Suspense>
  );
}
