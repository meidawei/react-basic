import React, { Component, useContext } from 'react'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class HomeInfo extends Component {
  render() {
    // 4.获取数据，并且使用数据
    console.log('this.context', this.context)
    return (
      <div>
        <h2>HomeInfo:{this.context.color}</h2>
        <h2>HomeInfo Size:{this.context.size}</h2>
        <UserContext.Consumer>
          {(value) => {
            return <h2>Info User:{value.nickname}</h2>
          }}
        </UserContext.Consumer>
      </div>
    )
  }
}

// 3.设置组件的contextType为某一个Context
HomeInfo.contextType = ThemeContext

export default HomeInfo
