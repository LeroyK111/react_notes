import { useEffect } from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import { useStore } from "./store";
import { Outlet } from "@tanstack/react-router";



function App() {
  
  const updateNavigationSign = useStore((s) => s.updateNavigationSign);

  return (
    <div className="app">
      <NavBar className="NavBar" onChange={{ updateNavigationSign }}></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
