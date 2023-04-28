import React, { Component } from "react";


interface rule {
  text: string,
  list: string[]
}


export default class Todolist extends Component<any, rule> {

  state = {
    text: "",
    list: []
  }

  // 还要设置绑定对象的类型
  myref = React.createRef<HTMLInputElement>()

  render() {
    return <div>
      <input type="text" value={this.state.text} onChange={(e)=>
        this.setState({
          text: e.target.value
        })
      }/>
      <button onClick={()=>{
        alert(this.state.text)
      }}>click</button>

      <div style={{backgroundColor: "red"}}>
        {/* 使用标记语法，获取dom中的value */}
        <input type="text" ref={this.myref}/>
        <button onClick={()=>{
          // !还要使用断言，直接定义类型
          console.log((this.myref.current as HTMLInputElement).value);
          

          this.setState({
            list: [...this.state.list, (this.myref.current as HTMLInputElement).value]
          })
        }}>点我获取</button>
      </div>

      {
        this.state.list.map((item,index)=>
        <li key={index}>{item}</li>  
        )
      }
    </div>;
  }
}


