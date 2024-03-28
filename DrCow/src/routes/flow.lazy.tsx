import { createLazyFileRoute } from "@tanstack/react-router";
import Flow from "../page/Flow";

export const Route = createLazyFileRoute("/flow")({
  component: Flow,
});
