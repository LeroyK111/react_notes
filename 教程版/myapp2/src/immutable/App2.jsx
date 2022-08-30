import React, { Component } from "react";
import { Map } from "immutable";



export default class App2 extends Component {
  state = {
    info: Map({
      name: "Leroy",
      select: "aa",
      filter: Map({
        text: "空白纸",
        up: true,
        down: false,
      }),
    }),
  };

  componentDidMount() { 
    // let old = Map(this.state.info)
    // console.log(this.state.info.get('text')); // 这个就获取不到
    // console.log(this.state.info.get('filter'));
  }

  render() {
    return <div>
      <button onClick={()=>{
        this.setState({
          info: this.state.info.set("name", "KKK")
        })
      }}>click</button>
      {this.state.info.get("name")}
      {/* 通过这种方式我，可以避免dom渲染，导致性能下降 */}
      <Child filter={this.state.info.get("filter")} />
    </div>;
  }
}


class Child extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.filter !== nextProps.filter;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("看一下don会刷新吗");
    // 不会
  }
  render() {
    return (
      <div>
        {this.props.filter.get('text')}
      </div>
    )
  }
}

