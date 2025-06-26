import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
const element = (
  <div className="title" style={{ color: 'red' }}>
    <span>hello world</span>
  </div>
)

// 创建Hello组件
class Hello extends Component {
  // 创建state公共参数
  state = {
    count: 0,
  }
  // 事件处理程序
  handleClick = () => {
    // setState()方法会自动调用render()方法
    // this.setState({ count: this.state.count + 1 })
    // 返回undefined
    console.log(this)
  }
  render() {
    return (
      <div>
        <h1 style={{ color: 'gold' }}>Hello React Class</h1>
        <button onClick={this.handleClick}>点击</button>
        <p>当前计数：{this.state.count}</p>
      </div>
    )
  }
}

// 创建真实DOMRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将React元素渲染到DOMRoot中
root.render(<Hello />)
