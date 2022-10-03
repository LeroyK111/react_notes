// @ts-nocheck
import React from "react";
import Router from "./router/indexRouter";
import Tabar from "./components/Tabar";
import "./css/App.css";

export default function App() {
  return (
    <div>
      <Router>
        {/* 麻烦啊，居然要使用插槽 */}
        <Tabar></Tabar>
      </Router>
    </div>
  );
}
