

/**
 * @author Leroy
 * react 19.2三个新特性
*/




import { startActivity, useActivityStatus } from 'react/experimental';

export const PageLoader = () => {
  /**
   * @author Leroy
   * startActivity(name, asyncFn) 启动一个活动；
React 会追踪它的生命周期；
useActivityStatus(name) 能实时返回当前活动状态；
如果用户中途又触发新的 load-page，旧任务会被中止（类似 abort signal）。
最佳实践
可与 Suspense、Transitions 结合，用于全局加载状态；
替代人工维护的 loading / cancel flag；
在大型 SPA 或 React Native 中尤其有价值。

  */


  const status = useActivityStatus('load-page');

  return (
    <div>
      <button onClick={() => startActivity('load-page', loadPage)}>加载页面</button>
      <p>当前状态：{status}</p>
    </div>
  );
}

async function loadPage() {
  const res = await fetch('/api/data');
  const data = await res.json();
  console.log('加载完成', data);
}




import { useEffect, useState, useEffectEvent } from 'react';

export const WindowSizeTracker = () => {
  const [count, setCount] = useState(0);

  /**
   * @author Leroy
   * 这里的神奇之处在于：
handleResize 不会因为 count 变化而重新绑定；
但在执行时，它能访问到最新的 count；
这样既保证性能，又避免闭包陈旧问题。
4️⃣ 最佳实践
用于所有“在 effect 中订阅外部事件”的场景；
避免“无限依赖循环”；
可安全地使用最新状态，而不触发重渲染。

  */

  const handleResize = useEffectEvent(() => {
    console.log('当前计数：', count);
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <button onClick={() => setCount(count + 1)}>点击 {count}</button>
  );
}



import { useActionState } from 'react';

async function loginAction(formData) {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('登录失败');
  return await res.json();
}



export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, { user: null, error: null });

  /**
   * @author Leroy
   * useActionState(fn, initialState) 返回 [state, action, pending]
action 是可直接绑定到 <form action={action}> 的函数；
React 会在提交时自动调用它；
pending 表示正在执行；
state 是你在 action 中返回的结果。
4️⃣ 最佳实践
代替传统的 onSubmit + useState；
自动管理 loading / error / result；
与 Server Actions 无缝衔接；
支持 async/await、流式响应。

  */

  return (
    <form action={action}>
      <input name="username" />
      <input type="password" name="password" />
      <button disabled={pending}>{pending ? '登录中…' : '登录'}</button>
      {state.error && <p>错误：{state.error}</p>}
      {state.user && <p>欢迎回来，{state.user.name}</p>}
    </form>
  );
}


// 传统用法
export function LoginForm2() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 阻止默认刷新
    setLoading(true);
    const formData = new FormData(e.target);
    const res = await fetch('/api/login', {
      method: 'POST',
      body: formData,
    });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" />
      <input name="password" type="password" />
      <button disabled={loading}>
        {loading ? '登录中…' : '登录'}
      </button>
    </form>
  );
}

