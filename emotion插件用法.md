# Emotion 情感组件库

官网地址：https://emotion.sh/docs/install

最大好处就是 Css 和 Component 可以共写。加快了组件开发速度。

## 简易用法

主要是两种用法：

- css 用法
  - 对象用法
  - 嵌入用法
- styled 用法
  - 直接生成组件

### css 用法

```sh
npm install --save @emotion/react
```

```tsx
import { css } from "@emotion/react";

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: "underline",
});

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
);
render(
  <SomeComponent>
    <AnotherComponent />
  </SomeComponent>
);
```

#### Create React App

这里使用的是 webpack + babel 的方式构建 react 前端应用。
框架使用方式： https://emotion.sh/docs/css-prop

配置方式：

`npm install --save-dev @emotion/babel-plugin`

配置.babelrc 文件

```env
{
  "env": {
    "production": {
      "plugins": ["@emotion", ...otherBabelPlugins]
    }
  },
  "plugins": ["@emotion"]
}
```

理论上就可以使用

#### ☆Vite

目前最流行的方式：vite

这里要特殊讲一讲配置。有巨坑。

tsconfig.json, 避免css报错
```json
{
  "compilerOptions":{
    "jsx": "react-jsx",
    "jsxImportSource": "@emotion/react"
  }
}
```

vite.config.ts, 避免css失效
```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
});
```

### styled 用法

开箱即用，毕竟是生成组件。

```sh
npm install --save @emotion/styled
```

```tsx
import styled from "@emotion/styled";

const Button = styled.button`
  color: hotpink;
`;

render(<Button>This is a hotpink button.</Button>);
```
