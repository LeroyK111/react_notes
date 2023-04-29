import ReactDOM from "react-dom/client";
import "./index.less";
import { RouterProvider } from "@tanstack/router";
import router from "./routers/index.ts";

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
