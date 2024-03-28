import { createLazyFileRoute } from "@tanstack/react-router";
import Code from "../page/Code";

export const Route = createLazyFileRoute("/code")({
  component: Code,
});
