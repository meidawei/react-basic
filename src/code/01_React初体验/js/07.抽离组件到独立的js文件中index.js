import React from 'react'
import ReactDOM from 'react-dom/client'

// 导入Hello、Button组件
import Hello from '../../../learn_component/01_类组件和函数组件/Hello'
import Button from '../../../learn_component/01_类组件和函数组件/Button'

const list = (
  <>
    <Hello />
    <Button />
  </>
)

const element = (
  <div className="title" style={{ color: 'red' }}>
    <span>hello world</span>
  </div>
)
// 创建真实DOMRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将React元素渲染到DOMRoot中
root.render(list)
