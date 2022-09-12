import React, { Component } from "react";
import Tabbar from "../components/Tabbar";
import { connect } from "dva";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>主页</h1>
        {this.props.children}
        {this.props.isShow && <Tabbar></Tabbar>}
      </div>
    );
  }
}

export default connect((state) => {
  console.log(state);
  return {
    a: 1,
    isShow: state.maizuo.isShow,
  };
})(App);

// export default App