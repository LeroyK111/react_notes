import React from 'react';

// 从这里导入组件名
import { Button } from 'antd';
// 从这里导入全部样式，用原生样式反而会报错
// import 'antd/dist/antd.css'
// import 'antd/dist/antd.min.css';

export default function App() {
  return (
    <div>
      <Button type="primary" loading>Primary Button</Button>
    </div>
  )
}
