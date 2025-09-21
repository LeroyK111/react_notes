// @ts-nocheck
import React, { useTransition } from "react";
import { useState } from "react";
import { useActionState } from 'react';
import { useOptimistic } from 'react';
import { Suspense, use } from 'react';


const updateName = async (name) => {
  return "@222";
};


// Using pending state from Actions
export function UpdateName({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  /**
   * useTransition 处理async状态
  */
  const [isPending, startTransition] = useTransition();

  
    

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      
      // redirect("/path");
      console.log("成功则跳转");
    });
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}




export function ChangeName({ name, setName }) {
  /**
   * @author Leroy
   * useActionState 是 React 19 新引入的一个 Hook，专门用于简化异步操作（Actions）的状态管理。它让开发者能够轻松处理异步请求中的错误、待处理状态（pending state），并可以根据操作的结果更新 UI。
  */
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get("name"));
      if (error) {
        return error;
      }
      // redirect("/path");
      return null;
    },
    null,
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  );
}



function ChangeName1({ currentName }) {
  /**
   * @author Leroy
   * useOptimistic 是 React 19 新增的一个 Hook，用于实现乐观更新。在处理数据操作时，useOptimistic 能够在异步请求完成之前立即显示预测的结果，从而提升用户体验。当请求完成后，UI 会自动切换到最终的结果。
  */
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async (formData) => {
    const newName = formData.get('name');
    setOptimisticName(newName);
    console.log(`Updated name: ${newName}`);
  };

  return (
    <form action={submitAction}>
      <p>Current name: {optimisticName}</p>
      <input type="text" name="name" defaultValue={currentName} />
      <button type="submit">Change</button>
    </form>
  );
}


// 子组件异步加载


function Son({ commentsPromise }) {
  /**
   * @author Leroy
   * 异步子组件
  */
  const comments = use(commentsPromise);
  return (
    <div>
      {comments.map(comment => <p key={comment.id}>{comment.text}</p>)}
    </div>
  );
}

function Father() {
  const commentsPromise = fetch('/api/comments').then(res => res.json());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Son commentsPromise={commentsPromise} />
    </Suspense>
  );
}




function BlogPost({ title }) {
  /**
   * @author Leroy
   * 示例：元数据标签原生支持
  */
  return (
    <article>
      <h1>{title}</h1>
      <title>{title}</title>
      <meta name="description" content="This is a blog post." />
    </article>
  );
}



// 示例：动态加载样式表
function App2() {
  return (
    <div>
      <link rel="stylesheet" href="styles.css" precedence="default" />
      <p>Hello, styled world!</p>
    </div>
  );
}


// 示例：无需 forwardRef
function MyInput({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}

const App3 = () => {
  const inputRef = React.createRef();
  return <MyInput ref={inputRef} />;
};


import { preload, preinit } from 'react-dom';


function App5() {
  /**
   * @author Leroy
   * 支持预加载资源
  */
  preload('/fonts/my-font.woff', { as: 'font' });
  preinit('/scripts/my-script.js', { as: 'script' });

  return <div>Hello, world!</div>;
}



function App6() {
  /**
   * @author Leroy
   * 9. 自定义元素支持
    示例：支持 Custom Elements
  */
  return <my-custom-element customProp="value" />;
}


import { useDeferredValue } from 'react';

function Search({ query }) {
  /**
   * @author Leroy
   * 示例：延迟值初始设置
  */
  const deferredQuery = useDeferredValue(query, '');
  return <div>Search results for: {deferredQuery}</div>;
}


// 13. 支持 <Context>
// 示例：简化 Context 提供者
const ThemeContext = React.createContext();

export function App7() {
  return (
    <ThemeContext value="dark111">
      <Child />
    </ThemeContext>
  );
}

function Child() {
  const theme = React.useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}