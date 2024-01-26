import { NavigateToResource } from "@refinedev/nextjs-router";

export default function Home() {
  return <NavigateToResource resource="PageEditor"></NavigateToResource>;
}
// 带入参数
Home.noLayout = false;
