import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import App from "./routes/App";
import Film from "./routes/Film";
import Cinema from "./routes/Cinema";
import Center from "./routes/Center";
import Detail from "./routes/Detail";
import Login from "./routes/Login";

// import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/login"} component={Login}></Route>
        <Route
          path={"/"}
          render={() => (
            <App>
              <Switch>
                {/* 使用插槽，封装tobar路由 */}
                <Route path={"/film"} component={Film}></Route>
                <Route path={"/cinema"} component={Cinema}></Route>

                {/* 使用路由拦截 */}
                <Route
                  path={"/center"}
                  render={() => {
                    return localStorage.getItem("token") ? (
                      <Center></Center>
                    ) : (
                      <Redirect to="login"></Redirect>
                    );
                  }}
                ></Route>

                {/* 路由传参 */}
                <Route path={"/detail/:myid"} component={Detail}></Route>

                <Redirect from="/" to={"film"}></Redirect>
              </Switch>
            </App>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
