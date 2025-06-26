import React from 'react'
import ReactDOM from 'react-dom/client'
const isLoading = false
const loadData = () => {
  if (isLoading) {
    // 加载中
    return <div>Loading...</div>
  } else {
    // 加载完成
    return <div>Data Loaded</div>
  }
}

const element = (
  <div className="title" style={{ color: 'gold' }}>
    <span>条件渲染</span>
    {loadData()}
  </div>
)

// 创建真实DOMRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将React元素渲染到DOMRoot中
root.render(element)
