/**
 * @author Leroy
 * 干净的dom树绑定
*/
import ReactDOM from "react-dom/client";
// 导入全局默认样式
import "./index.scss";
import "normalize.css";
import App from "./App";

// 绑定dom
ReactDOM.createRoot(document.getElementById("root")!).render(<App></App>);
