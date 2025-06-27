import React, { Component } from 'react'
import './style.css'

export class TabControl extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0,
    }
  }
  itemClick(index) {
    // 1.自己保存最新的index
    this.setState({
      currentIndex: index,
    })
    // 2.调用父组件传递过来的函数
    // 让父组件执行对应的函数
    this.props.tabClick(index)
  }
  render() {
    const { titles } = this.props
    const { currentIndex } = this.state
    return (
      <div className="tab-control">
        <ul>
          {titles.map((item, index) => {
            return (
              <li
                key={index}
                className={currentIndex === index ? 'active' : ''}
                onClick={(e) => this.itemClick(index)}
              >
                <span className="text">{item}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TabControl
