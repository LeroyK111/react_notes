import { useState } from "react";
import "./App.scss";
import Document from "./components/Document";
import Code from "./components/Code";
import Flow from "./components/Flow";
import NavBar from "./components/NavBar";
import Draw from "./components/Draw";

function App() {
  return (
    <div className="app">
      <Document className="Document"></Document>
      <Code className="Code"></Code>
      <Flow className="Flow"></Flow>
      <Draw className="Draw"></Draw>
      <NavBar className="NavBar"></NavBar>
    </div>
  );
}

export default App;
