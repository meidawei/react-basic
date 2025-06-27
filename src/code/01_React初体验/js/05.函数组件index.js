import React from 'react'
import ReactDOM from 'react-dom/client'
const element = (
  <div className="title" style={{ color: 'red' }}>
    <span>hello world</span>
  </div>
)
// 函数组件的约定
// 1. 函数名首字母大写
// 2. 函数返回值是React元素，必须有返回值
const Hello = () => <h1 style={{ color: 'gold' }}>Hello World</h1>
// 创建真实DOMRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将React元素渲染到DOMRoot中
root.render(<Hello />)
