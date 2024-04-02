import { useEffect } from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import { useStore } from "./store";
import { Outlet } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

function App() {
  const updateNavigationSign = useStore((s) => s.updateNavigationSign);
  const navigationSign = useStore((s) => s.navigationSign);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigationSign === "document") {
      navigate({
        to: `/`,
      });
    } else {
      navigate({
        to: `/${navigationSign}`,
      });
    }
  }, [navigationSign]);

  return (
    <div className="app">
      <NavBar
        navigationSign={navigationSign}
        onChange={updateNavigationSign}
      ></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
