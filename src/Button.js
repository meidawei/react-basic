// 创建Button组件
import { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button className="btn" style={{ color: 'red' }}>
        我是一个人格独立的按钮
      </button>
    )
  }
}

// 导出
export default Button
