import React from 'react'
import ReactDOM from 'react-dom/client'
// 导入样式文件
import './base.css'
const list = [
  { id: 1, name: '上海黑马82期', salary: 11000 },
  { id: 2, name: '上海黑马83期', salary: 12000 },
  { id: 3, name: '上海黑马89期', salary: 18000 },
]
const list2 = list.map((item) => (
  <li key={item.id}>
    <h3>所在班级：{item.name}</h3>
    <p>薪资：{item.salary}</p>
  </li>
))
const element = (
  <div className="list">
    <ul
      style={{
        listStyle: 'none',
        color: 'skyblue',
        backgroundColor: 'powderblue',
      }}
    >
      {list2}
    </ul>
  </div>
)
// 创建真实DOMRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将React元素渲染到DOMRoot中
root.render(element)
