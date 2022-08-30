import React, { Component } from "react";
import "../css/tabControl.css";



export default class Tabbar extends Component {

  render() {
    
    return (
      <div className="todobar">
        <ul>
          {this.props.list.map((item, index) => (
            <li
              className={this.props.checkLiNum === index ? "active" : ""}
              key={item.id}
              onClick={() => {
                this.checkLi(index);
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }


  checkLi(index) {
    this.props.myevent(index)
  }
}
