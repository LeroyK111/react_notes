import React, { useState, useRef, useEffect } from "react";
import LogicFlow, { Options } from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import { css } from "@emotion/react";
import { Control, Menu, DndPanel, SelectionSelect } from "@logicflow/extension";
import "@logicflow/extension/lib/style/index.css";

const SilentConfig = {
  adjustNodePosition: true,
};
const styleConfig: Partial<Options> = {
  style: {
    rect: {
      rx: 5,
      ry: 5,
      strokeWidth: 2,
    },
    circle: {
      fill: "#f5f5f5",
      stroke: "#fff",
    },
  },
};

const data = {
  nodes: [
    {
      id: "1",
      type: "rect",
      x: 100,
      y: 60,
      text: "矩形",
    },
    {
      id: "2",
      type: "circle",
      x: 300,
      y: 60,
      text: "圆形",
    },
    {
      id: "3",
      type: "ellipse",
      x: 500,
      y: 60,
      text: "椭圆",
    },
    {
      id: "4",
      type: "polygon",
      x: 100,
      y: 200,
      text: "多边形",
    },
    {
      id: "5",
      type: "diamond",
      x: 300,
      y: 200,
      text: "菱形",
    },
    {
      id: "6",
      type: "text",
      x: 500,
      y: 200,
      text: "纯文本节点",
    },
    {
      id: "7",
      type: "html",
      x: 100,
      y: 320,
      text: "html节点",
    },
  ],
  edges: [
    {
      sourceNodeId: "1",
      targetNodeId: "2",
      startPoint: {
        x: 100,
        y: 60,
      },
      endPoint: {
        x: 500,
        y: 50,
      },
      type: "polyline",
    },
    {
      sourceNodeId: "2",
      targetNodeId: "3",
      type: "line",
    },
    {
      sourceNodeId: "2",
      targetNodeId: "4",
      type: "bezier",
    },
  ],
};

const useHandlePlugins = () => {
  LogicFlow.use(Control);
  LogicFlow.use(Menu);
  LogicFlow.use(DndPanel);
  LogicFlow.use(SelectionSelect);
};

export default function Flow(props: props) {
  const refContainer = useRef<any>(null);
  useHandlePlugins();
  useEffect(() => {
    if (refContainer) {
      const lf = new LogicFlow({
        container: refContainer.current,
        grid: true,
        ...SilentConfig,
        ...styleConfig,
      });
      lf.render(data);
      lf.translateCenter();
    }
  }, [refContainer]);

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          z-index: 1;
        `}
        ref={refContainer}
      />
    </div>
  );
}
