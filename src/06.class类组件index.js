import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
const element = (
  <div className="title" style={{ color: 'red' }}>
    <span>hello world</span>
  </div>
)
// 创建class组件（类组件）
// 约定：
// 1. class需要继承React.Component父类,需要手动引入
// 2. 比如提供render()方法
// 3. render()方法要返回内容，没有的话返回null

class Hello extends Component {
  render() {
    return <h1 style={{ color: 'gold' }}>Hello React Class</h1>
  }
}

// 创建真实DOMRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将React元素渲染到DOMRoot中
root.render(<Hello />)
