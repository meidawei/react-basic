import React from 'react'
import ReactDOM from 'react-dom/client'

// 列表渲染
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' },
]

const list = songs.map((item) => <li key={item.id}>{item.name}</li>)

const element = (
  <>
    <ul>{list}</ul>
  </>
)
// 创建真实DOMRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将React元素渲染到DOMRoot中
root.render(element)
