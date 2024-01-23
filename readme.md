# react学习

##  基本介绍

**核心是能用js的原生写法，就用js的原生写法**

![image-20220808174218995](readme.assets/image-20220808174218995.png)

都是后端渲染SSR模式，也都支持前后端分离。

和vue一样，拥有自己的开发插件。

![image-20220811164957063](readme.assets/image-20220811164957063.png)

### 传统MVC模型：

M：model模型（数据库的表抽象化成类）

V：view视图（只监听视图的请求）

C：controlled控制器（处理请求，链接MV的逻辑）

### 传统MTV模型：

M：model模型（数据库的表抽象化成类）。

V：view视图，是处理业务逻辑，控制数据呈现逻辑。

T：Template（模板）模板引擎，模板渲染。django模板，jinja2模板。

### MVVM模式：

前身是**MVP模式**：

M：model数据库抽象（将表抽象成类）

V： view视图控制（控制渲染）

P： presenter控制器，（视图view可以直接控制部分model，无需经过presenter ）

**mvvm模式：**

解决了MVP大量的手动View和Model同步的问题，提供双向绑定机制。

m：model数据模型

v：view渲染视图

vm：视图模型（双向绑定数据）

## 组件化：

将html页面上的标签，样式，js代码，封装成一个独立的模块，进行开发。然后统一的挂载到一个页面中。实现了模块化和代码复用。

## 特性：

![image-20220808213557807](readme.assets/image-20220808213557807.png)

虚拟dom操作：避免回流和重绘（消耗性能）

![image-20220808222204068](readme.assets/image-20220808222204068.png)

![image-20220808222714930](readme.assets/image-20220808222714930.png)

## 学习和测试

这个不是我们学的，只能拿来说一下。

通过script标签加载js文件，避免跨域问题，crossorigin设置请求头。

```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

## 全局安装脚手架（重点）

```
# 全局安装脚手架
npm i -g create-react-app
# 调用命令
create-react-app your-app
```

```
# 直接网络映射构建脚手架
npx create-react-app your-app
```

安装三个东西

![image-20220808224554947](readme.assets/image-20220808224554947.png)

![image-20220808225406517](readme.assets/image-20220808225406517.png)

npm run eject

精通者使用，保留源码的同时，使用webpack 和 npm进行自定义构建。

脚手架基本结构（记得别备份node_modules，太大了）

![image-20220808231650654](readme.assets/image-20220808231650654.png)

其他插件，组件，功能，会在随后的学习中逐个介绍。

 ![image-20220808233321877](readme.assets/image-20220808233321877.png)

### 解决报错

![image-20220808235218814](readme.assets/image-20220808235218814.png)

解决js中写入jsx语法，报错的问题:

1.文件后缀改成js=>jsx

2.使用babel，进行转换@babel/plugin-transform-react-jsx

```
npm install --save-dev @babel/plugin-transform-react-jsx-compat
```

```
babel --plugins @babel/plugin-transform-react-jsx-compat index.js
```

混写jsx语法时，记得关闭jshint插件，在react中一点都不好用。

推荐使用eslint插件，原生支持jsx语法。

## ★JSX语法

jsx将html语法直接加入到JavaScript代码中，再通过翻译器转换到纯JavaScript后由浏览器执行。在实际开发中，jsx在打包阶段都已经翻译成纯JavaScript，不会带来任何副作用，反而让代码更加直观并易于维护。编译过程都是由babel的jsx编译器实现。

class组件

ES6的加入让JavaScript直接支持使用class类定义一个类，react创建组件的方式就是使用类的继承，ES6 class时目前官方推荐的使用方式，它使用了ES6标准语法来构建。

## ★组件Components

### class组件
快捷键：rcc

![image-20220809135947403](readme.assets/image-20220809135947403.png)

### func组件
快捷键：rfc

![image-20220809135932784](readme.assets/image-20220809135932784.png)

### 组件的嵌套

![image-20220809144833058](readme.assets/image-20220809144833058.png)

### 模板语法
{}

![image-20220809144814860](readme.assets/image-20220809144814860.png)

### 组件的样式

![image-20220809153135975](readme.assets/image-20220809153135975.png)

### 事件操作

![image-20220809231911572](readme.assets/image-20220809231911572.png)


![image-20220809231707951](readme.assets/image-20220809231707951.png)

![image-20220809234315886](readme.assets/image-20220809234315886.png)

**事件代理，将事件绑定在父元素上，通过e.target去触发子元素事件**

### Ref的应用（数据绑定）

![image-20220810133527123](readme.assets/image-20220810133527123.png)

这里就开始对数据绑定，实现响应式。

![image-20220810133504099](readme.assets/image-20220810133504099.png)

### 组件的数据挂载

#### 状态state
![image-20220810154243196](readme.assets/image-20220810154243196.png)

说白了就是无限滚动，不断比较滚轮距离和视口大小，利用数据代理替换已渲染的数据。

![image-20220810165952370](readme.assets/image-20220810165952370.png)

直接操作数组状态

![image-20220810182448535](readme.assets/image-20220810182448535.png)

#### 条件渲染

{逻辑判断} => 实现dom标签的渲染 ![image-20220810221447326](readme.assets/image-20220810221447326.png)

![image-20220810221638659](readme.assets/image-20220810221638659.png)

##### 注意点：

1.事件与状态的同步和异步关系。

奇怪的地方。 ![image-20220815210833740](readme.assets/image-20220815210833740.png)

![image-20220815212353283](readme.assets/image-20220815212353283.png)

![image-20220815212715788](readme.assets/image-20220815212715788.png)

2.引入插件

```
npm i @better-scroll/core
```

![image-20220816124656750](readme.assets/image-20220816124656750.png)

![image-20220816124713865](readme.assets/image-20220816124713865.png)

####  属性props

state是组件自身的属性，只能组件自身使用。

给组件的标签传入属性值，然后组件通过props就可以调用了。

![image-20220816142033133](readme.assets/image-20220816142033133.png)

##### 使用方式

![image-20220816142143911](readme.assets/image-20220816142143911.png)

属性默认值和验证方式

![image-20220816142229143](readme.assets/image-20220816142229143.png)

![image-20220816143625273](readme.assets/image-20220816143625273.png)

##### 函数式组件

![image-20220816150739304](readme.assets/image-20220816150739304.png)

![image-20220816150816440](readme.assets/image-20220816150816440.png)

#### state和props的区别

![image-20220816151256664](readme.assets/image-20220816151256664.png)

state可以调用setState进行修改。但是props是一个只读属性，无法直接修改。

**react推荐多写无状态组件。**

## 表单中的受控和非受控

### 非受控组件

![image-20220816162956271](readme.assets/image-20220816162956271.png)

#### 受控组件

![image-20220816163131430](readme.assets/image-20220816163131430.png)

## 消息通信

### 父子通信

#### 父传子：

调用子组件的标签，然后通过标签属性传递数据。

![image-20220817145908569](readme.assets/image-20220817145908569.png)

子组件通过props对象接收，验证

![image-20220817150107238](readme.assets/image-20220817150107238.png)

#### 子传父:

 将父组件的回调函数，传递给子组件，然后由子组件调用。回调函数本身就可以传参，只需将实参带入即可。

![image-20220817153527308](readme.assets/image-20220817153527308.png)

![image-20220817153523703](readme.assets/image-20220817153523703.png)

最好做成无状态state组件。

子组件的参数完全由父组件供给，这样一来就是完全受控的子组件。

![image-20220817180730081](readme.assets/image-20220817180730081.png)

#### Ref标记

vue的Ref是数据包装，给对象走了一个数据代理，实现了响应式。

react的Ref是对象标记，可以获取DOM元素or组件对象，实现数据和事件的共享。

![image-20220817211255415](readme.assets/image-20220817211255415.png)

![image-20220817211354575](readme.assets/image-20220817211354575.png)

### 非父子通信

#### 状态提升

一层层传递数据和方法，直到有同一个父层级存在时，两个非父子组件的才能互相通信。

![image-20220818001107922](readme.assets/image-20220818001107922.png)

![image-20220818001058558](readme.assets/image-20220818001058558.png)

#### 发布订阅模式

不同于redux全局状态管理。

基本原理。

![image-20220818200313857](readme.assets/image-20220818200313857.png)

![image-20220818230444218](readme.assets/image-20220818230444218.png)

#### context状态树传参

使用方式三种:

1.创建独立文件，组件引用传参

![image-20220823213027717](readme.assets/image-20220823213027717.png)

2.函数组件，钩子传参

![image-20220823213149017](readme.assets/image-20220823213149017.png)

挂载到组件内部，当静态方法使用。

![image-20220823213538878](readme.assets/image-20220823213538878.png)

3.直接包裹，使用标签属性传参

![image-20220819000404609](readme.assets/image-20220819000404609.png)

![image-20220819000428720](readme.assets/image-20220819000428720.png)

## 插槽slot

![image-20220819010939384](readme.assets/image-20220819010939384.png)

![image-20220819011011065](readme.assets/image-20220819011011065.png)

## 生命周期

```
组件挂载: 
constructor() 第一
static getDerivedStateFromProps() # 静态内部方法 第二
render() 第三
componentDidMount() 第四，挂在dom结束后
```

```
组件的state和props更新时
static getDerivedStateFromProps() # 静态内部方法  第一
shouldComponentUpdate() # 控制dom是否渲染，性能优化的方法 第二
render() 第三
getSnapshotBeforeUpdate() 第四
componentDidUpdate() 第五
```

```
组件卸载
componentWillUnmount()
```

```
错误处理
static getDerivedStateFromError()
componentDidCatch()
```

```
当你需要强制重新渲染时
forceUpdate()
推荐使用
setState()
```

```
组件传参props默认值
CustomButton.defaultProps = {
  color: 'blue'
};
```

```
配合React Developer Tools插件，进行组件的问题诊断，给组件包装个名字
displayName
```

这里API已经过时。

![image-20220819124546714](readme.assets/image-20220819124546714.png)

挂载

UNSAFE_componentWillMount() 组件被初始化

componentDidMount() 组件被渲染

![image-20220819153223878](readme.assets/image-20220819153223878.png)

监听状态，传参

UNSAFE_componentWillUpdate() 拿到将要更新的dom

componentDidUpdate(*prevProps*, *prevState*) 拿到已更新的dom

![image-20220819154744605](readme.assets/image-20220819154744605.png)

考点SCU**优化函数**

shouldComponentUpdate(*nextProps*, *nextState*) 优化dom渲染

![image-20220819160040724](readme.assets/image-20220819160040724.png)

UNSAFE_componentWillReceiveProps(*nextProps*) 被父组件触发

![image-20220819170532508](readme.assets/image-20220819170532508.png)

componentWillUnmount() 监听组件的销毁，手动关闭事件和定时器

![image-20220819204017499](readme.assets/image-20220819204017499.png)

![image-20220819203930845](readme.assets/image-20220819203930845.png)

### 新生命周期钩子

static getDerivedStateFromProps(*props*, *state*)  初始化，dom渲染，update更新，被父组件触发。

![image-20220819235030988](readme.assets/image-20220819235030988.png)

getSnapshotBeforeUpdate() 这个钩子更常用

![image-20220821154431025](readme.assets/image-20220821154431025.png)

### 性能优化

shouldComponentUpdate() 控制dom元素是否重新渲染，以此来优化性能.

PureComponent 纯粹组件功能.

![image-20220821235450509](readme.assets/image-20220821235450509.png)

## hooks

rfc函数式组件

### 组件状态

```
基础Hook的生命周期

useState 函数组件状态
useEffect 三个生命周期合并
useContext 状态树


useReducer useState的高级用法
useCallback 优化方法
useMemo 计算属性
useRef 标记dom
useImperativeHandle 暴露给父组件dom
useLayoutEffect	dom加载完毕后，调用
useDebugValue debug标记，控制台
useDeferredValue 防抖，节流, 延时
useTransition 过度任务，不常用
useId 组件属性唯一id

useSyncExternalStore 高级并发渲染
useInsertionEffect useEffect类似，但功能有限
```

useState

![image-20220822111814190](readme.assets/image-20220822111814190.png)

### 组件数据处理

★useEffect（处理副作用）

useLayoutEffect（避免页面抖动）

![image-20220822183116091](readme.assets/image-20220822183116091.png)

### 记忆函数

useCallback() 存放不常发生变化的状态

![image-20220822194511218](readme.assets/image-20220822194511218.png)

### 计算属性

useMemo() 存放需要被计算出来的新对象

![image-20220822200049281](readme.assets/image-20220822200049281.png)

### 包装对象

useRef() 一般拿来标记dom，偶尔情况下可以存储临时变量

![image-20220822205725057](readme.assets/image-20220822205725057.png)

### 上下文通信

*const* context = useContext(GlobalContext);

![image-20220823114207491](readme.assets/image-20220823114207491.png)

### 外部状态

*const* [state, dispatch] = useReducer(first, second, third)

![image-20220823131445045](readme.assets/image-20220823131445045.png)

![image-20220823131524375](readme.assets/image-20220823131524375.png)

推荐useReducer+createContext两种方法一起使用

![image-20220823212743496](readme.assets/image-20220823212743496.png)

### 自定义hooks

![image-20220823220548619](readme.assets/image-20220823220548619.png)

这就是对函数式组件的逻辑，方法，事件，状态的全部复用.


## 路由route

```
我们使用v5版本的路由
npm install react-router-dom@5
最新版本是v6 摒弃#hash
npm install react-router-dom
```

前端路由

### 多级路由

这个不常用。

![image-20220824140228254](readme.assets/image-20220824140228254.png)

### 嵌套路由：

![image-20220824132430068](readme.assets/image-20220824132430068.png)

![image-20220824132448806](readme.assets/image-20220824132448806.png)

![image-20220824132605729](readme.assets/image-20220824132605729.png)

### 路由重定向:

![image-20220824134206209](readme.assets/image-20220824134206209.png)

### 路由导航

声明式导航。

a标签。不适用

![image-20220825143322957](readme.assets/image-20220825143322957.png)

编程式导航

三种跳转方式。

![image-20220825152337519](readme.assets/image-20220825152337519.png)

![image-20220829120039478](readme.assets/image-20220829120039478.png)

### 动态路由

主要是依靠 url进行参数传递。为了让url传递真正的参数，推荐:data语法。

![image-20220825195601178](readme.assets/image-20220825195601178.png)

![image-20220825195624527](readme.assets/image-20220825195624527.png)

![image-20220825195650894](readme.assets/image-20220825195650894.png)

### 路由拦截

需要重新传递props对象

![image-20220825205010767](readme.assets/image-20220825205010767.png)

![image-20220825203503687](readme.assets/image-20220825203503687.png)

### 路由模式

![image-20220825203625565](readme.assets/image-20220825203625565.png)

![image-20220825210726629](readme.assets/image-20220825210726629.png)

### 子组件增强

withRouter()直接包装子组件，赋予props

![image-20220825211457078](readme.assets/image-20220825211457078.png)

### 反向代理

这就是利用脚手架进行反向代理了。

https://create-react-app.dev/docs/proxying-api-requests-in-development

```
npm install http-proxy-middleware --save
```

![image-20220825224909985](readme.assets/image-20220825224909985.png)

### Css module

 CSS样式分割，让每个组件css都不同。加入中间缀components.module.css

![image-20220825230155508](readme.assets/image-20220825230155508.png)

![image-20220825230106581](readme.assets/image-20220825230106581.png)

## 状态管理Redux

 至于Flux这个老状态中间件，已经停止运维，我们选择redux。

```
npm install redux
```

工作流

![image-20220826122659809](readme.assets/image-20220826122659809.png)

 每个状态，每个消息，都可以再次封装。

![image-20220826152658156](readme.assets/image-20220826152658156.png)

```
!本质是一个包装过的订阅发布模式，
! store.subscribe() 监听事件
! store.dispatch() 发布事件
! store.getState() 访问最新状态
```

三大原则

![image-20220826160816792](readme.assets/image-20220826160816792.png)

不修改原值state，而是深复制原对象，然后在新对象上修改内容。

###  reducer扩展（子状态）

将全局状态拆分成单独的子状态。

![image-20220826174606364](readme.assets/image-20220826174606364.png)

子状态组件

![image-20220826174622736](readme.assets/image-20220826174622736.png)

### 加入异步中间件

官方推荐：https://redux.js.org/usage/writing-logic-thunks

```
npm i redux-thunk
```

![image-20220826203142181](readme.assets/image-20220826203142181.png)

直接发布新状态。

![image-20220826203406423](readme.assets/image-20220826203406423.png)

避免重复订阅。我们销毁订阅

![image-20220826204143679](readme.assets/image-20220826204143679.png)

这个状态中间件已经不再被维护。

```
npm i redux-promise
```

![image-20220826210224990](readme.assets/image-20220826210224990.png)

![image-20220826210719617](readme.assets/image-20220826210719617.png)

### 启动redux DevTools插件

![image-20220826220441089](readme.assets/image-20220826220441089.png)

![image-20220826221117294](readme.assets/image-20220826221117294.png)

### 使用react-redux

https://react-redux.js.org/introduction/getting-started

```
npm install react-redux
```

这就是让react组件和redux组件之间。构建了一个上下文管理组件connect。

![image-20220826232617514](readme.assets/image-20220826232617514.png)

![image-20220826232712092](readme.assets/image-20220826232712092.png)

![image-20220826232916383](readme.assets/image-20220826232916383.png)

#### 高级组件HOC

**相当于对redux进行了二次封装**,**更容易使用了**

![image-20220826233736330](readme.assets/image-20220826233736330.png)

这里指的Provider组件，其实就是状态树。

![image-20220827101300377](readme.assets/image-20220827101300377.png)

HOC就是利用react-redux，对组件进行二次包装，赋予它state和func两种方法和状态。这样一来，我们就不需要使用store的自带的方法了。

![image-20220829012428511](readme.assets/image-20220829012428511.png)

![image-20220829013753646](readme.assets/image-20220829013753646.png)

### redux持久化

https://github.com/rt2zz/redux-persist

```
基于redux-persist库
npm install redux-persist
```

![image-20220829015603862](readme.assets/image-20220829015603862.png)

![image-20220829014959211](readme.assets/image-20220829014959211.png)

新包装

![image-20220829015532066](readme.assets/image-20220829015532066.png)





## 三方插件的使用

Antd组件库

```
npm install antd --save
```

![image-20220829100448432](readme.assets/image-20220829100448432.png)

### 栅格系统

栅格布局的一种，可以快速行列化。

![image-20220829102326102](readme.assets/image-20220829102326102.png)

### 画布布局

几种布局方式。

![image-20220829110633459](C:\Users\LeroyK\AppData\Roaming\Typora\typora-user-images\image-20220829110633459.png)

### 移动端布局

不需要引入样式

![image-20220829112447741](readme.assets/image-20220829112447741.png)

## immutable

```
使用深复制js，保证初始值不受到任何改变。
npm install immutable
```

![image-20220829150524043](readme.assets/image-20220829150524043.png)

![image-20220829155344869](readme.assets/image-20220829155344869.png)

数组的方法

![image-20220829155906503](readme.assets/image-20220829155906503.png)

### 这才是常用的API

![image-20220829170500636](readme.assets/image-20220829170500636.png)

### redux-immutable

![image-20220829183305625](readme.assets/image-20220829183305625.png)



## Mobx新状态管理

redux是官方推荐的全局状态管理包。但是mobx是一个更易用的全局状态管理。

https://mobx.js.org/README.html

基于vue的数据代理同样的方案Proxy。

![MobX 单向流](readme.assets/flow2.png)

![image-20220829194948659](readme.assets/image-20220829194948659.png)

```
npm install --save mobx
```

### 严格模式的坑

坑！！！！**其实关闭严格模式也可以**

![image-20220829214845652](readme.assets/image-20220829214845652.png)

第二个坑

![image-20220903123306195](readme.assets/image-20220903123306195.png)

实验性功能，使用装饰器语法。

https://zh.mobx.js.org/enabling-decorators.html

解决异步。

![image-20220829225436164](readme.assets/image-20220829225436164.png)

记得取消监听

![image-20220829230010090](readme.assets/image-20220829230010090.png)

### 使用mobx-react-lite

```
# 官方推荐更轻量的mobx-react-lite
npm i mobx-react-lite
npm i mobx-react
```

![image-20220830114619170](readme.assets/image-20220830114619170.png)

![image-20220830002206856](readme.assets/image-20220830002206856.png)

利用状态树，传递store状态。然后监听observer包裹的组件。

类组件，需要包裹一下
![image-20220830114504396](readme.assets/image-20220830114504396.png)

函数式组件，则不需要。

![image-20220830115156240](readme.assets/image-20220830115156240.png)



## TS脚手架

```
create-react-app myapp-ts --template typescript
```

ts有定义编译成本，多了太多类型提示。

**vscode居然是基于react + Electron构建的桌面应用。**

如果把js重构成ts则要注意了。

### react-class 类组件

![image-20220903100743163](readme.assets/image-20220903100743163-16621709000861.png)

### react-hook 方法组件

![image-20220903104545160](readme.assets/image-20220903104545160.png)

引入一个概念,说明文档

![image-20220903112804520](readme.assets/image-20220903112804520.png)

### router-tsx模式

这里涉及到接口说明文档，一般格式@types/xxxxx

![image-20220903131833783](readme.assets/image-20220903131833783.png)

![image-20220903131754137](readme.assets/image-20220903131754137.png)



### redux-ts用法

![image-20220903150934576](readme.assets/image-20220903150934576.png)

### antd组件用法

```
npm i antd-mobile
```

![image-20220903153606879](readme.assets/image-20220903153606879.png)

## styled-components

https://github.com/kristerkari/react-native-css-modules

使用其他样式的方法：less，sass等。

CSS组件，模块化。

```
npm install --save styled-components
&表示父一级
${允许js代码}
```

其实就是利用高阶组件的方法，支持sass语法。

![image-20220903165851077](readme.assets/image-20220903165851077.png)

### 透传

![image-20220903171342409](readme.assets/image-20220903171342409.png)

### 高级样式组件的用法

![image-20220903172358951](readme.assets/image-20220903172358951.png)

### 动画

![image-20220903174018278](readme.assets/image-20220903174018278.png)



## 单元测试

```
npm i react-test-renderer
# 搭配测试框架
npm install --save-dev jest
npm test
```

不是白盒测试or黑盒测试。单纯的就是组件测试。

### 浅组件测试

![image-20220903181324580](readme.assets/image-20220903181324580.png)

### 事件触发（不推荐使用，有坑）

### 第三方测试enzyme

![image-20220903191530774](readme.assets/image-20220903191530774.png)



推荐https://jestjs.io/ 作为最新的测试框架。



## redux-saga

```
全局监听器，流程管理。
npm install redux-saga
```

![image-20220903191754592](readme.assets/image-20220903191754592.png)

为了避免状态异步。我们之前引入了redux-thunk和redux-promise处理异步状态值。

就是一个拦截器中间件。拦截了redux的发布dispatch。

![image-20220905121308017](readme.assets/image-20220905121308017.png)

通过中间件，将action的内容重新改写。放入异步然后转变为同步接收value。

![image-20220905121458073](readme.assets/image-20220905121458073.png)

使用saga这种协程（生成器）方案，也是一种方法。

### 批量监听

![image-20220905125231491](readme.assets/image-20220905125231491.png)

### 接力方法

![image-20220905125848539](readme.assets/image-20220905125848539.png)

新的语法糖。

#### 使用独立

![image-20220905130844608](readme.assets/image-20220905130844608.png)

#### 使用聚合

说白了，就是连独立takeEvery都不要用

![image-20220905130819172](readme.assets/image-20220905130819172.png)

## React补充

冷门知识。

### portal

dom节点传送门。把dom渲染到root根节点之外。

![image-20220905132353910](readme.assets/image-20220905132353910.png)

解决的痛点

![image-20220905134351966](readme.assets/image-20220905134351966.png)

使用createPortal，将jsx传送到某个节点下。

![image-20220905144038342](readme.assets/image-20220905144038342.png)

阻止事件冒泡

![image-20220905144421452](readme.assets/image-20220905144421452.png)

### 懒加载

组件懒加载。

![image-20220905151232093](readme.assets/image-20220905151232093.png)

路由懒加载。

```
 npm i react-loadable
```

![image-20220905151345890](readme.assets/image-20220905151345890.png)

### 引用传递ref

Ref技术，Dom标记。

![image-20220905160412477](readme.assets/image-20220905160412477.png)

### memo缓存

只针对函数式组件的dom更新优化，至于class组件，有PureComponent高阶组件负责。

![image-20220905161736294](readme.assets/image-20220905161736294.png)



## GraphQL

RPC**远程过程调用**是一种规范，它允许在不同的上下文中远程执行一个函数。

**SOAP**是一种XML格式的、高度标准化的网络通信协议。



常用种类。

**REST**是一种由一组架构约束定义的自解释API架构风格，旨在为许多API消费者广泛采用。

- **统一接口**：允许以统一的方式与给定的服务器进行交互，而不考虑设备或应用类型。

- **无状态**：处理请求的必要状态，就像请求本身所包含的那样，服务器不需要存储任何与会话有关的内容。

- **缓存**

- **客户端-服务器架构**：允许任何一方独立进化

- 应用程序的**分层系统**

- 服务器向客户机提供**可执行代码**的能力

  ![img](readme.assets/322a87999a1c42d78e880388af6ee129tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

**GraphQL**是一种描述如何进行精确数据请求的语法。

![在GraphQL中执行查询](readme.assets/d8a590b830ee4d99a4da2460261ca1catplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

![image-20220905162754250](readme.assets/image-20220905162754250.png)

### 评价：

GraphQL就是一种适合高维大数据的聚合API的规则。

```
https://graphql.org/learn/
```

最大进步，就是api接口是自适应的，前端完全可以通过一定的规则，去请求数据。而不需要后端去改动路由和sql。。。

[点我跳转到node-graphql笔记中](../Node_learning/graphql/readme.md#graphql学习)

## Dva框架
了解即可，已经弃用。

这是一个基于redux，react-router，redux-saga的数据流状态解决方案。

```
# 有自己的脚手架
$ npm install dva-cli -g
$ dva -v
```

### 目录解构

```
dva new dva-quickstart
```

只需要看文件目录，就可以了解到dva脚手架的状态。

![image-20220910035009678](readme.assets/image-20220910035009678.png)



## Umi框架

蚂蚁集团对react脚手架的二次开发，框架。

https://umijs.org/docs/tutorials/getting-started

```
# 会有很多配置项，需要根据需求来选择。
npx create-umi@latest
# 这里就是微生成器(构建各种必须插件)
npm i umi
# 使用npm启动服务
npm start
# 还有一个bug，偶尔要安装这个
npm install react-sortable-hoc --save
```

三种安装模式：

![image-20220911231641490](readme.assets/image-20220911231641490.png)

![image-20220911231708997](readme.assets/image-20220911231708997.png)

![image-20220911231738813](readme.assets/image-20220911231738813.png)

### 目录解构

![image-20220913002549006](readme.assets/image-20220913002549006.png)



## 新版routerV6

```
npm i react-router-dom@6
```

![image-20220913010925980](readme.assets/image-20220913010925980.png)

### 对比V5

![image-20220913011455360](readme.assets/image-20220913011455360.png)

### 用法：

#### router导入App

路由模式:

![image-20220913155648551](readme.assets/image-20220913155648551.png)

#### 设置routers-index根路由

设置主路由

![image-20220913155503308](readme.assets/image-20220913155503308.png)

重定向组件

![image-20220913160329644](readme.assets/image-20220913160329644.png)

新API

![image-20220913160313098](readme.assets/image-20220913160313098.png)

#### 嵌套路由

![image-20220913155944153](readme.assets/image-20220913155944153.png)

#### 编程式跳转

这里我们不再使用<a“>声明式跳转<”/a>

import { NavLink，Link } from 'react-router-dom'

推荐用法

import { useNavigate } from "react-router-dom";

![image-20220913160444794](readme.assets/image-20220913160444794.png)



#### ★路由容器

![image-20220913160135812](readme.assets/image-20220913160135812.png)

#### 路由传参

![image-20220913163921548](readme.assets/image-20220913163921548.png)

![image-20220913163952959](readme.assets/image-20220913163952959.png)

动态路由

![image-20220913165151359](readme.assets/image-20220913165151359.png)

![image-20220913165201219](readme.assets/image-20220913165201219.png)

![image-20220913165227758](readme.assets/image-20220913165227758.png)

#### 路由拦截

![image-20220913191919295](readme.assets/image-20220913191919295.png)

#### 抽象子组件

不用withRouter，强行赋予props.各种方法.如果是class组件，则还是需要包装一下。

![image-20220913193430772](readme.assets/image-20220913193430772.png)

间接使用class组件,withRouter组件。只需要这么用，将class组件，强行变换成func组件，然后class组件HOC高阶方法即可。

![image-20220913193911607](readme.assets/image-20220913193911607.png)

![image-20220913194418967](readme.assets/image-20220913194418967.png)

#### 路由懒加载

加快启动速度。开启懒加载，则所有组件都会被分割成单独js

![image-20220913204400348](readme.assets/image-20220913204400348.png)



![image-20220913204350310](readme.assets/image-20220913204350310.png)

#### useRoutes钩子配置

![image-20220913211147467](readme.assets/image-20220913211147467.png)

# 分层结构

**使用分层架构时要避免的错误**

-   **过度工程**——保持简单且可扩展的架构，避免使用不遵循 React 模式的设计，例如基于继承的设计。
    
-   **紧耦合**——当层紧密耦合时，在不影响其他层的情况下更改一个层可能很困难。通过使用适当的模式和技术（例如依赖注入和接口）来减少耦合。
    
-   **忽略性能**——如果实施不当，分层架构会影响应用程序性能。在优化架构以提高性能时，请考虑代码拆分、延迟加载和缓存等因素。
    
-   **糟糕的命名约定**——为你的层、组件和函数使用清晰一致的命名约定。否则，从长远来看，开发人员将很难理解和维护代码。
    
-   **缺乏测试**——每一层都应该进行彻底的测试，以确保它按预期工作。未能测试每一层可能会导致最终应用程序中出现错误和其他问题。
    
-   **缺乏凝聚力**——每一层都具有高度的凝聚力。内聚性是指一个层内的功能和职责的相关程度。低内聚性会导致代码难以理解和维护。

## 小技巧

### 严格模式
```js
'use strict';
```
'use client'声明是RSC（React Server Component，服务端组件）协议中的定义。

启用了RSC的React应用，所有组件默认在服务端渲染（可以通过Next v13体验），只有声明'use client'的组件文件，会在前端渲染。

### using 关键字
using关键字是tc39提案ECMAScript Explicit Resource Management[1]提出的，用于为各种资源（内存、I/O等）提供统一的生命周期管理（何时分配、何时释放等）。

```js
{
  const getResource = () => {
    return {
      [Symbol.dispose]: () => {
        console.log('离开啦!')
      }
    }
  }
  using resource = getResource();
}
// 代码执行到这里会打印 离开啦!
```

### use 方法
React v18.3之后发布的新原生hook —— use：
```js
using data = use(ctx);
```

这个hook可以接收两种类型数据：

React Context
此时use的作用与useContext一样。

promise
此时如果这个promise处于pending状态，则最近一个祖先<Suspense/>组件可以渲染fallback。

比如，在如下代码中，如果<Cpn />组件或其子孙组件使用了use，且promise处于pending状态（比如请求后端资源）：
```jsx
function App() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Cpn />
      </Suspense>
    </div>
  );
}
```

那么，页面会渲染如下结果：
<div>
  <div>loading...</div>
</div>
当请求成功后，会渲染<Cpn />。


# React [18.2.0](https://github.com/facebook/react/releases/tag/v18.2.0)

重开一个新项目，重新学习api