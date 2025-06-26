import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

// 创建真实的DOMRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将React元素渲染到DOMRoot中
root.render(<App />)
