import React, { Component } from 'react'
// !导入路由件，记得还要安装ts的说明文档@types/xxxxxx
import { HashRouter, Route, Redirect, Switch} from "react-router-dom";
// 导入组件
import Film from '../views/Film';
import Center from '../views/Center';
import Ciname from '../views/Ciname';
import Detail from '../views/Detail';



export default class IndexRounter extends Component {
  render() {
    return (
      // 还是使用hash路由
      <HashRouter>
        <Switch>
        <Route path={"/film"} component={Film}></Route>
        <Route path={"/ciname"} component={Ciname}></Route>
        <Route path={"/center"} component={Center}></Route>
        <Route path={"/detail/:myid"} component={Detail}></Route>

        {/* 重定向 */}
        <Redirect from='/' to="/film"/>
        </Switch>
      </HashRouter>
    )
  }
}
