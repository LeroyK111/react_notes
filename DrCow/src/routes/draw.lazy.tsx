import { createLazyFileRoute } from "@tanstack/react-router";
import Draw from "../page/Draw";

export const Route = createLazyFileRoute("/draw")({
  component: Draw,
});


