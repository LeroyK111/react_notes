// @ts-nocheck
import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  // !改变路由模式
  history: require("history").createBrowserHistory()
});

// 2. Plugins
// app.use({});

// 3. Model 开启状态
app.model(require('./models/maizuo').default);
// !可以注册多个状态
// app.model(require('./models/store').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
