import React from 'react'
// 1.创建一个Context
// 里面使用一些共享数据
const ThemeContext = React.createContext({
  color: 'blue',
  size: 14,
})
export default ThemeContext
