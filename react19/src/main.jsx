// @ts-nocheck
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


/**
 * @author Leroy
 * 区别
onCaughtError触发时机：当组件的错误被 ErrorBoundary 捕获时调用。用途：记录被捕获的错误，执行相关处理。

onUncaughtError触发时机：当组件的错误未被任何 ErrorBoundary 捕获时调用。用途：处理未捕获的错误，防止应用崩溃，或者做全局错误日志记录。
*/

// 示例：新增 onCaughtError 和 onUncaughtError
const domNode = document.getElementById('root');
const root = createRoot(domNode, {
  onCaughtError: (error) => console.log('Caught error:', error),
  onUncaughtError: (error) => console.error('Uncaught error:', error),
});

root.render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
