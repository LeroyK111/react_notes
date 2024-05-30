# React 19 新特性
React 19 不仅是向前迈进的一步，而且想要改变开发人员在 React 中构建应用的方式。React 19 计划引入的一些最令人兴奋的特性包括：

服务端组件：通过服务端组件，React 19 能够实现更快的页面加载速度和更好的 SEO 效果。这意味着在将页面交付给用户之前，服务器会预先处理组件，从而提升用户体验和搜索引擎可见性。

Actions：React 19 引入了 Actions，这是一个全新的机制，用于简化网页内数据和交互的管理。通过 Actions，开发人员可以更方便地通过表单更新页面信息，减少复杂性并优化用户体验。

优化的资源加载：React 19 在资源加载方面进行了优化，允许在后台加载站点资源，以实现更平滑的页面过渡。这意味着用户可以在浏览当前页面时，提前加载下一页所需的图片和其他文件，从而减少页面切换时的等待时间。

文档元数据：React 19 引入了一个新的 "DocumentHead" 组件，用于简化 SEO 管理。通过该组件，开发人员可以更方便地向页面添加标题和元标签，提高搜索引擎优化效果，而无需进行重复的编码工作。

Web Components：React 19 改善了与 Web Components 标准的兼容性，使开发人员能够更轻松地使用 Web Components 构建灵活、兼容的 Web 应用。

## React 编译器
React 编译器一项自动优化工具，旨在通过先进的编译技术减少不必要的重新渲染，提高 React 应用的性能。在深入探究 React 编译器的工作原理之前，我们先回顾一下 React 的核心思维模型。

## React 心智模型
React的核心是一个声明式和基于组件的心智模型。在前端开发中，声明式编程意味着描述 UI 的期望最终状态，而无需通过 DOM 操作来指定达到该状态的每一步。同时，基于组件的方法将 UI 元素分解为可重用、简洁、自包含的构建块，促进了模块化并简化了维护。

为了有效地识别需要更新的特定 DOM 元素，React使用了一个称为虚拟 DOM 的内存中UI表示。当应用状态发生变化时，React会将虚拟DOM与真实DOM进行比较，识别出所需的最小更改集，并精确地更新真实DOM。

简而言之，React的心智模型是：每当应用状态发生变化时，React就会重新渲染。然而，有时React可能会过于“反应灵敏”，导致不必要的重新渲染，从而降低应用的性能。

## 重新渲染的困境
React 对应用状态变化的快速响应能力是一把双刃剑。一方面，由于其声明式方法，它简化了前端开发。另一方面，它可能导致 UI 中组件对状态变化的过度重新渲染。

当处理如对象和数组这样的 JavaScript 数据结构时，重新渲染问题尤为常见。问题在于，JavaScript中没有一种计算效率高的方法来比较两个对象或数组是否相等（即具有相同的键和值）。

考虑以下场景：有一个React组件，它在每次渲染时都会生成一个新的对象或数组，如下所示：
```js
import React from "react";

const AlphabetList = () => {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div>
      <h2>Alphabet List</h2>
      <ul>
        {alphabet.map((letter, index) => (
          <li key={index}>{letter}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlphabetList;
```

尽管React组件在每次渲染时可能生成内容相同的本地数组，但React无法直接识别出这一点，因此可能会不必要地触发依赖于该数组中值的组件及其嵌套DOM元素的重新渲染，即使 UI 实际上没有变化。这种不受控制的重新渲染会很快导致性能下降，影响用户体验。

为了优化这种情况并减少不必要的重新渲染，React 开发人员可以利用记忆化技术。记忆化允许缓存基于特定输入的计算结果或组件输出，并在输入未变时直接复用这些结果。这种方法能够显著减少组件的重新渲染次数，提高 React 应用的整体性能和效率。

React 18 提供了以下记忆化工具来帮助我们实现这一目标：

React.memo()：一个高阶组件，允许基于props的浅比较来避免组件的重新渲染，只要props没有发生变化。

useMemo()：用于在组件重新渲染之间缓存计算的结果。只有当依赖项之一发生变化时，useMemo()才会重新计算并返回新的结果。

useCallback()：用于缓存函数的定义，确保在依赖项未变时不会重新创建函数。

通过使用useMemo() Hook，可以优化 AlphabetList 组件，避免在其依赖的数据（如数组）未发生变化时进行不必要的重新渲染。这种方法能够显著提高组件的性能，确保 UI 的流畅性和响应性。

```js
import React, { useMemo } from "react";

const AlphabetList = () => {
  const alphabet = useMemo(() => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  }, []);

  return (
    <div>
      <h2>Alphabet List</h2>
      <ul>
        {alphabet.map((letter, index) => (
          <li key={index}>{letter}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlphabetList;
```

React 的记忆化工具确实在提升性能上起到了关键作用，但它们确实增加了开发者的工作量和代码复杂度，因为它要求开发者不仅描述 UI 的状态，还需显式管理渲染的优化。这在一定程度上违背了 React 强调的声明式编程哲学。

为了减轻开发者的负担，理想的解决方案是一个智能的编译器或工具链，它能够自动分析 React 组件的依赖关系，并生成优化的代码。这样的工具能够确保组件仅在状态值发生实质性变化时重新渲染，从而在不牺牲性能的前提下，保持代码的简洁性和可维护性。

## React 编译器是什么？
React 编译器，亦名React Forget，是一款针对 React 的优化编译器。它目前已在 Instagram 的网页门户中投入生产使用，并计划在首次开源发布前，扩展至 Meta 旗下的其他应用。

最初，React 编译器旨在通过自动生成类似于memo、useMemo和useCallback的调用，来强化React的核心编程模型，进而降低重新渲染的开销。随着时间的推移，该项目已从“自动记忆化编译器”演进为更为先进的“自动响应性编译器”。

React Forget 的核心目标，是确保 React 应用能够默认拥有合理的响应性。这意味着应用仅在状态值发生实质性变化时才会触发重新渲染。传统的 React 在对象标识改变时会重新渲染组件，而 React Forget 则通过智能判断，仅在对象的语义内容变化时触发重新渲染，同时避免了深度比较带来的性能损耗。从技术实现来看，React 编译器采用了自动记忆化技术。但开发团队认为，响应性框架是理解其工作原理的更全面视角。

尽管 JavaScript 的动态特性和宽松规则使其优化变得复杂，但 React 编译器通过模拟JavaScript和React的规则，确保了代码编译的安全性和效率。这些规则在限制开发人员操作的同时，也为编译器执行优化提供了安全的操作空间。

## React 编译器好处
React 编译器的引入带来了显著的益处：

简化记忆化管理：开发者无需手动编写和维护复杂的记忆化策略，从而降低了代码的复杂性，减少了出错的风险，并极大简化了开发流程。

提升开发者体验：开发者能够更专注于核心功能的构建，无需分心于繁琐的性能优化工作。不仅提高了生产力，还让他们能更充分地利用React的声明式编程优势。

加速React应用性能：React 编译器智能地决定何时渲染组件，有效减少了不必要的计算和资源消耗。这使得用户界面更加流畅和响应迅速，为用户带来了更好的体验，并显著提升了整体应用的性能。

尽管这些改变令人充满期待，但我们仍需观察 React 编译器在实际代码开发中的具体效果。为了确保编译器能够高效运行，开发者需要确保他们的代码严格遵循 React 的规则。因此，官方团队强烈推荐使用 ESLint 等工具来准备和检查代码，以确保其兼容性并充分利用 React 编译器的潜力。

## React 的规则
React 设定了一套严格的规范，以确保Web应用的高质量。开发者需遵循这些原则，它们同样是 React 编译器背后的基石。

以下是React的几个核心规则：

幂等性组件：React组件在接收到相同的输入（包括props、state和context）时，应始终产生一致的输出。

副作用外部化：副作用操作（如数据获取、订阅或DOM更新）不应嵌入在组件的渲染流程中。它们应被放置在如useEffect等生命周期 Hook 中执行。

不可变props与state：React组件中的props和state应被视为不可变。直接修改它们可能导致错误和不可预测的行为。

Hooks参数与返回值的不变性：一旦值被传递给 React Hooks，它们应保持不变。Hooks依赖其参数和返回值的稳定性来确保组件行为的一致性和可预测性。

不可变JSX值：在 JSX 渲染后，不应修改其中使用的值。任何必要的修改应在JSX创建之前进行，以确保渲染结果的稳定性。

组件函数的使用限制：React组件应通过JSX使用，而非直接作为普通函数调用。

Hooks的正确使用：React Hooks（如useState和useEffect）应仅在函数组件内部使用。将它们作为普通值传递可能会导致不符合预期的行为并违反Hooks的使用规则。从常规的JavaScript函数中调用hooks可能会导致错误并违反hooks的规则。

只在顶层调用hooks：React hooks 应该始终在函数组件的顶层调用，即在任何条件语句或循环之前。这确保了hooks在每次渲染时都以相同的顺序被调用，并保持其预期的行为。

# 用法

```jsx
function UpdateName({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);
    if (error) {
      setError(error);
      return;
    } 
    redirect("/path");
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
```


在 React 19 中增加了对在转换中使用异步函数的支持，以自动处理挂起状态、错误、表单和乐观更新。

例如，可以使用useTransition来自动处理挂起状态：

```jsx

function UpdateName({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      } 
      redirect("/path");
    })
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
```

异步转换会立刻将isPending状态设为true，发起异步请求，并在转换完成后将isPending设置为false。这样可以确保数据变化时，UI 仍然保持响应和交互性。

在 Actions 功能的基础上，React 19 还推出了useOptimistic Hook 来简化乐观更新的管理，以及 React.useActionState Hook来处理 Actions 的常见场景。同时，在 react-dom 中，新增了<form> Actions 来自动管理表单操作，并提供了useFormStatus 来支持表单中 Actions 的常见需求。

在 React 19 中，上面的例子可以简化为：

```jsx
function ChangeName({ name, setName }) {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get("name"));
      if (error) {
        return error;
      }
      redirect("/path");
    }
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  );
}
```

下面就来看看这些新的 Actions 功能的作用和使用方法。

全新 Hook：useActionState
为了让常见的 Action 用例更加简便，因此添加了一个名为useActionState的新 Hook：
```jsx
const [error, submitAction, isPending] = useActionState(async (previousState, newName) => {  
  const error = await updateName(newName);  
  
  if (error) {  
    // 可以返回Action的任何结果，这里只返回错误信息。
    return error;  
  }  
  
  // 处理成功的情况  
});
```

useActionState接受一个函数（即“Action”），并返回一个可调用的包装 Action。这之所以能够工作是因为Actions是可组合的。当调用包装后的Action时，useActionState将返回Action的最后一个结果作为数据，并将Action的挂起状态作为pending返回。

React DOM: <form> Actions
在 React 19 中，Actions 与 react-dom 的新 <form> 特性进行了深度整合。现在，可以将函数作为<form>、<input>和<button>元素的action和formAction属性，以便自动使用 Actions 提交表单：


```jsx
<form action={actionFunction}>
```

当<form>的action成功执行时，React会自动为不受控组件重置表单状态。如果需要手动重置<form>，React DOM API 提供了全新的requestFormReset方法。

React DOM 新 Hook：useFormStatus
在构建设计系统时，经常需要创建一些设计组件，这些组件需要能够访问其所在表单的状态信息，而不必通过层层传递props来实现。虽然通过Context也可以实现这一功能，但为了简化常见场景下的使用，React 19 引入了一个新的 Hook useFormStatus：
```jsx

import { useFormStatus } from 'react-dom';  
  
function DesignButton() {  
  const { pending } = useFormStatus();  
  
  return <button type="submit" disabled={pending} />;  
}
```

useFormStatus可以读取父级<form>的状态，就像该表单是一个Contextprovider 一样。

全新 Hook：useOptimistic
在数据变更操作中，一种常见的 UI 模式是在异步请求执行期间乐观地显示预期的最终状态。React 19 引入了新的useOptimistic Hook，以简化这一流程：

```jsx
function ChangeName({currentName, onUpdateName}) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async formData => {
    const newName = formData.get("name");
    setOptimisticName(newName);
    const updatedName = await updateName(newName);
    onUpdateName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input
          type="text"
          name="name"
          disabled={currentName !== optimisticName}
        />
      </p>
    </form>
  );
}
```

在这个例子中，useOptimistic Hook 允许在updateName请求还在进行时，立即将输入框的值（即newName）设置为optimisticName，从而乐观地更新UI。如果更新成功，则通过onUpdateName回调函数来确认状态的更改；如果更新失败或发生错误，可以通过setOptimisticName回滚到原始状态currentName。

全新 API：use
在React 19中，引入了一个全新的API——use，它允许在组件渲染时直接读取资源。

举个例子，可以使用use来读取一个Promise对象，而React将会自动挂起（Suspend）组件的渲染，直到该Promise解析完成：

```jsx
 
import { use } from 'react';  
  
function Comments({ commentsPromise }) {  
  // 使用use读取Promise，React会在Promise解析前挂起组件渲染  
  const comments = use(commentsPromise);  
  
  return (  
    <div>  
      {comments.map((comment) => (  
        <p key={comment.id}>{comment.text}</p>  
      ))}  
    </div>  
  );  
}  
  
function Page({ commentsPromise }) {  
  // 当Comments组件因use挂起时，这里会显示Suspense的fallback内容  
  return (  
    <Suspense fallback={<div>加载中...</div>}>  
      <Comments commentsPromise={commentsPromise} />  
    </Suspense>  
  );  
}
```

同样可以使用use来读取上下文（Context），从而实现在特定条件下（例如早期返回之后）按需读取上下文数据。

`早期返回指的是在函数或方法中的某个点提前结束执行，并返回结果或退出，而不是继续执行剩余的代码。在函数内部，根据某些条件或逻辑，你可能会决定不需要继续执行后续的代码，此时可以使用return语句来立即退出函数。`

```jsx
 
import {use} from 'react';
import ThemeContext from './ThemeContext'

function Heading({children}) {
  if (children == null) {
    return null;
  }
   
  // 使用 useContext 在这里不会生效 ，因为存在早期返回。
  const theme = use(ThemeContext);
  return (
    <h1 style={{color: theme.color}}>
      {children}
    </h1>
  );
}
```

use API 的调用仅限于渲染阶段，与 React 的 Hook 类似。然而，与 Hook 不同的是，use API 允许在条件语句中灵活调用。展望未来，React 团队计划进一步扩展 use API 的功能，提供更多在渲染时消费资源的方式。

React 服务器组件
服务器组件
服务器组件是一种创新性的技术，它允许在打包前，在独立于客户端应用程序或服务器端渲染（SSR）服务器的环境中预先渲染组件。这个独立的环境即为React服务器组件中的“服务器”。服务器组件有两种运行模式：一种是在构建时（例如在持续集成服务器上）运行一次；另一种是针对每个请求，通过 Web 服务器进行实时运行。

React 19 全面集成了来自 Canary 频道的所有服务器组件特性。这意味着，那些带有服务器组件的库现在可以将 React 19 作为对等依赖项进行目标定位，并通过 react-server 导出条件，为支持全栈 React 架构的框架提供强大的支持。

服务器操作
服务器动作是一项强大功能，它允许客户端组件调用并执行在服务端的异步函数。

通过“use server”指令定义服务器操作后，框架将智能地创建一个指向服务端函数的引用，并安全地将该引用传递给客户端组件。当客户端组件需要调用这个函数时，React 会负责向服务器发送请求，执行相应的函数，并将结果返回给客户端。

服务器操作的创建非常灵活，既可以在服务器组件内部创建，并作为属性传递给客户端组件使用；也可以直接在客户端组件中导入并调用。这种设计使得服务器操作能够无缝集成到应用中，实现前后端数据的流畅交互。

功能改进
ref 作为属性
从 React 19 开始，可以将 ref 作为函数组件的参数进行访问：

```jsx
function MyInput({placeholder, ref}) {  
  return <input placeholder={placeholder} ref={ref} />  
}  
  
//...  
  
<MyInput ref={ref} />
```

新的函数组件将不再需要 forwardRef，React 团队将会发布一个代码转换工具来自动更新组件，以使用新的 ref 属性。在未来的版本中，将弃用并移除 forwardRef。


React 19 允许直接将 <Context> 用作提供者，而无需使用传统的 <Context.Provider> 写法：
```jsx
const ThemeContext = createContext('');  
  
function App({children}) {  
  return (  
    <ThemeContext value="dark">  
      {children}  
    </ThemeContext>  
  );  
}
```

这种新的语法更加简洁直观。为了方便开发者升级现有代码，React 团队将发布一个代码转换工具，能够自动将现有的 <Context.Provider> 转换为新的 <Context> 提供者。未来版本中，将逐步弃用 <Context.Provider>，以推动 React 社区向更加简化的语法过渡。

refs 清理函数
现在支持从 ref 回调函数中返回一个清理函数：

```jsx
<input  
  ref={(ref) => {  
    // 创建 ref  
  
    // 新增：返回一个清理函数，当元素从 DOM 中移除时重置 ref。
    return () => {  
      // ref 的清理工作  
    };  
  }}  
/>
```

当组件卸载时，React 将调用从 ref 回调函数中返回的清理函数。这适用于 DOM refs、类组件的 refs 以及 useImperativeHandle。

由于引入了 ref 清理函数的机制，现在 TypeScript 将拒绝从 ref 回调函数中返回除清理函数以外的任何内容。为了避免这个问题，我们通常建议避免使用隐式返回，比如将赋值操作放在花括号中，如下所示：

```jsx
// 原来的写法：

 
<div ref={current => (instance = current)} />


// 优化后的写法：

 
<div ref={current => { instance = current; }} />
```

这种改变是因为 TypeScript 无法判断原始代码中返回的是否应该是清理函数，还是无意中的隐式返回值。通过将赋值操作明确地包裹在花括号中，确保了 ref 回调中不会意外地返回任何值，除非有意为之。

为了自动化这种模式的转换，可以使用 no-implicit-ref-callback-return 规则进行代码转换。这将帮助你在升级 React 版本时更顺畅地处理 ref 相关的代码。

useDeferredValue 的初始值
React 19 为 useDeferredValue 引入了 initialValue 选项，该选项允许指定组件首次渲染时返回的值。

```jsx
function Search({ deferredValue }) {  
  // 在组件首次渲染时，返回 initialValue 作为 value。
  // 随后，useDeferredValue 会在后台计划一次重渲染，使用 deferredValue 作为新的 value。
  const value = useDeferredValue(deferredValue, { initialValue: '' });  
  
  return (  
    <Results query={value} />  
  );  
}
```

使用 initialValue 可以确保组件在首次渲染时能够立即显示一个占位值，而无需等待 deferredValue 的异步计算完成。随后，当 deferredValue 准备好时，useDeferredValue 会触发组件的后台重渲染，以显示最新的值。这有助于提升应用的响应性和用户体验。

文档元数据支持
在HTML中，诸如<title>、<link>和<meta>等文档元数据标签通常放置在<head>区域内。然而，在React应用中，决定哪些元数据适用于当前页面的组件可能并不直接位于渲染<head>的位置，甚至React可能根本不直接渲染<head>。过去，这些元数据标签需要手动通过effect或借助如react-helmet这样的库进行插入，且在服务器渲染React应用时需要特别小心处理。

React 19引入了原生支持在组件中渲染文档元数据标签的功能。这意味着可以直接在组件内部定义这些标签，React会自动将它们提升到文档的<head>部分。这一改进确保了元数据标签能够在仅客户端应用、流式服务端渲染（SSR）以及服务器组件等场景下正常工作。

下面是一个简单的示例，展示了如何在React组件中定义并使用这些元数据标签：

```jsx
function BlogPost({ post }) {  
  return (  
    <article>  
      <h1>{post.title}</h1>  
      {/* 直接在组件内部定义元数据标签 */}  
      <title>{post.title}</title>  
      <meta name="author" content="Josh" />  
      <link rel="author" href="https://twitter.com/joshcstory/" />  
      <meta name="keywords" content={post.keywords.join(', ')} />  
      <p>  
        Eee equals em-see-squared...  
      </p>  
    </article>  
  );  
}
```

在这个BlogPost组件中，尽管<title>、<meta>和<link>标签被定义在了<article>内部，但React会在渲染时自动将它们移至文档的<head>区域。这种方式简化了元数据的管理，还增强了React应用在各种渲染模式下的兼容性和灵活性。

样式表支持
在Web开发中，样式表的管理至关重要，无论是通过外部链接（<link rel="stylesheet" href="...">）还是内嵌方式（<style>...</style>）引入，都需要在 DOM 中精准布局，以确保样式优先级得到妥善处理。然而，构建一个能够支持组件内部样式表组合的机制往往十分繁琐，因此开发者常常面临权衡：要么将样式远离其依赖的组件加载，牺牲组织性；要么依赖外部样式库，增加额外的复杂性。

React 19 针对这一挑战提供了内置支持，不仅简化了样式表的管理流程，还进一步增强了与客户端并发渲染和服务器端流式渲染的集成能力。通过指定样式表的优先级，React 将自动处理样式表在DOM中的插入顺序，确保在展示依赖于特定样式规则的内容之前，相关的样式表（无论外部还是内嵌）已经被加载并应用。

```jsx
function ComponentOne() {
  return (
    <Suspense fallback="loading...">
      <link rel="stylesheet" href="foo" precedence="default" />
      <link rel="stylesheet" href="bar" precedence="high" />
      <article class="foo-class bar-class">
        {...}
      </article>
    </Suspense>
  )
}

function ComponentTwo() {
  return (
    <div>
      <p>{...}</p>
      <link rel="stylesheet" href="baz" precedence="default" />  <-- will be inserted between foo & bar
    </div>
  )
}
```

在服务端渲染过程中，React会将样式表包含在<head>标签中，以确保浏览器在加载完成前不会进行页面绘制。如果在已经开始流式传输后才发现样式表，React 将确保在客户端将样式表插入到<head>标签中，然后再展示依赖于该样式表的Suspense边界的内容。

在客户端渲染过程中，React会等待新渲染的样式表加载完成后再提交渲染结果。如果在应用中的多个位置渲染了这个组件，React将确保样式表在文档中只被包含一次。


```jsx
function App() {
  return <>
    <ComponentOne />
    ...
    <ComponentOne /> // 不会导致 DOM 中出现重复的样式表链接
  </>
}
```

对于那些习惯于手动加载样式表的开发者来说，React 19 的这一改进为他们提供了一个便利的机会。现在，可以将样式表直接放在依赖它们的组件旁边，这不仅有助于提升代码的可读性和可维护性，使得开发者可以更加清晰地了解每个组件的样式依赖关系，而且还能够确保只加载真正需要的样式表。

此外，样式库和与打包器集成的样式工具也可以采用这一新特性。即使开发者不直接渲染自己的样式表，只要他们所使用的工具升级到支持这一功能，他们同样能够享受到这一改进带来的好处。


异步脚本支持
在HTML中，普通脚本（<script src="...">）和延迟脚本（<script defer src="...">）按照文档顺序加载，这限制了它们在组件树深处的灵活使用。然而，异步脚本能够以任意顺序加载，为开发者提供了更大的灵活性。

React 19 针对异步脚本提供了增强的支持，允许开发者在组件树的任何位置渲染它们，直接放在实际依赖该脚本的组件内部。这大大简化了脚本的管理，无需再担心脚本实例的重新定位和去重问题。

现在，你可以在组件中这样使用异步脚本：

```jsx
function MyComponent() {  
  return (  
    <div>  
      <script async src="..." />  
      Hello World  
    </div>  
  );  
}  
  
function App() {  
  return (  
    <html>  
      <body>  
        <MyComponent />  
        ...  
        <MyComponent /> // 不会导致DOM中出现重复的脚本  
      </body>  
    </html>  
  );  
}
```

在所有渲染环境中，异步脚本都将进行去重处理，因此即使多个不同的组件渲染了同一个脚本，React 也只会加载和执行该脚本一次。

在服务端渲染中，异步脚本将被包含在<head>标签中，并优先于阻止绘制的更关键资源（如样式表、字体和图像预加载）之后加载。

资源预加载支持
在文档初始加载和客户端更新时，及时告知浏览器可能即将需要加载的资源，对于提升页面性能至关重要。React 19 引入了一系列新的API，旨在简化浏览器资源的加载和预加载过程，让开发者能够构建出流畅且高效的用户体验。

```jsx
import { prefetchDNS, preconnect, preload, preinit } from 'react-dom';  
  
function MyComponent() {  
  preinit('https://.../path/to/some/script.js', { as: 'script' }); // 提前加载并执行脚本  
  preload('https://.../path/to/font.woff', { as: 'font' }); // 预加载字体  
  preload('https://.../path/to/stylesheet.css', { as: 'style' }); // 预加载样式表  
  prefetchDNS('https://...'); // 当可能会从该主机请求资源但尚不确定时  
  preconnect('https://...'); // 当确定会从该主机请求资源但不确定具体资源时  
}
```


这些 API 调用会在渲染组件时生成相应的DOM标签，如下所示：


```jsx
<html>  
  <head>  
    <!-- 链接根据其对页面加载的贡献程度进行优先级排序 -->  
    <link rel="prefetch-dns" href="https://..."> <!-- DNS预获取 -->  
    <link rel="preconnect" href="https://..."> <!-- 提前建立连接 -->  
    <link rel="preload" as="font" href="https://.../path/to/font.woff"> <!-- 预加载字体 -->  
    <link rel="preload" as="style" href="https://.../path/to/stylesheet.css"> <!-- 预加载样式表 -->  
    <script async src="https://.../path/to/some/script.js"></script> <!-- 异步加载并执行脚本 -->  
  </head>  
  <body>  
    ...  
  </body>  

</html>
```

通过利用这些API，开发者可以优化页面的初始加载速度，减少用户等待时间。同时，在客户端更新时，预取和预加载资源也能帮助加快导航速度，提升用户体验。无论是通过预加载字体和样式表来减少页面渲染阻塞，还是通过预取DNS和预连接来加速资源请求，这些API都为开发者提供了强大的工具，使资源加载更加智能和高效。

与第三方脚本和扩展的兼容性
在React 19中，对挂载过程进行了优化，以更好地兼容第三方脚本和浏览器扩展。

在客户端挂载时，如果渲染的元素与服务器返回的HTML中的元素不一致，React会触发客户端的重新渲染，以确保内容的正确性。然而，过去，若第三方脚本或浏览器扩展插入了某些元素，这会导致不匹配错误并触发不必要的客户端渲染。

现在，React 19 能够智能地跳过<head>和<body>中的意外标签，从而避免了因这些元素引发的不匹配错误。即使因为其他原因需要进行整个文档的重新渲染，React也会保留由第三方脚本和浏览器扩展插入的样式表，确保页面的完整性和一致性。


自定义元素支持
React 19 现已正式加入对自定义元素的全方位支持，并成功通过 Custom Elements Everywhere 的所有测试。

在过去，React 对于自定义元素的处理并不尽如人意，因为它往往将未识别的属性（props）默认为属性（attributes）而非属性（properties）。然而，在 React 19 中增加了对属性的支持，这种支持既适用于客户端也适用于服务器端渲染（SSR），具体策略如下：

在服务端渲染时，如果传递给自定义元素的属性（props）是基本数据类型（如字符串、数字或值为true），它们将作为属性（attributes）进行渲染。相反，如果属性的类型是非基本类型（如对象、符号、函数或值为false），它们将不会被渲染，确保了数据的正确性和一致性。

在客户端渲染时，React 19 则更加智能地处理属性。如果属性（props）与自定义元素实例上的属性（properties）相匹配，它们将被直接设置为属性（properties）。否则，它们将作为属性（attributes）进行分配。这种处理方式不仅提升了性能，还使得React在处理自定义元素时更加准确和高效。