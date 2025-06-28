import React, { Component } from 'react'
import './style.css'

export class TabControl extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0,
    }
  }
  // 通过props调用父组件的函数执行
  itemClick(index) {
    // 保存最新的index
    this.setState({
      currentIndex: index,
    })
    this.props.tabClick(index)
  }
  render() {
    // itemType是一个插槽
    // 通过props传递过来
    const { titles, itemType } = this.props
    const { currentIndex } = this.state
    return (
      <div className="tab-control">
        {titles.map((item, index) => {
          return (
            <div
              key={index}
              className={`item ${currentIndex === index ? 'active' : ''}`}
              onClick={() => this.itemClick(index)}
            >
              {/* 作用域插槽 */}
              {itemType(item)}
            </div>
          )
        })}
      </div>
    )
  }
}

export default TabControl
