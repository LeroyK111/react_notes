import React, { Component } from "react";

// 传参验证
import PropTypes from "prop-types";
export default class Navbar extends Component {
  state = {
    a: 1,
  };

  static propTypes = {
    // !放到类里面，也可以验证
    title1: PropTypes.string,
    leftshow: PropTypes.bool,
  };

  static defaultProps = {
    // !默认值，也可以验证
    title1: "我是默认值",
  };

  render() {
    // 这里可以直接接收到参数props
    // console.log(this.props);
    let { title1, leftshow } = this.props;
    console.log(this.props);
    return (
      <div>
        {leftshow && <button>返回</button>}
        Navbar---{title1}
        {/* 如果stats是ok，则我们显示msg中的内容 */}
        {this.props.stats === "ok" ? <h2>{this.props.msg}</h2> : ""}
      </div>
    );
  }
}

// Navbar.propTypes = {
//   /*
//   ! 对标签属性传递的参数，进行表单验证，也只能验证类型了...
//   */
//   title1: PropTypes.string,
//   leftshow: PropTypes.bool,
// };

// 可以设置组件默认传参
// Navbar.defaultProps = {
//   title1: "xxxx"
// };
