import React, { Component } from 'react'
import Home from './Home'
import Profile from './Profile'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: {
        name: 'kobe',
        age: 30,
      },
    }
  }
  render() {
    const { info } = this.state
    console.log('App Info:', info)

    return (
      <div>
        <h2>App</h2>
        {/* 1.给Home传递数据 */}
        <Home name={info.name} age={info.age} />
        <Home {...info} />
      </div>
    )
  }
}

export default App
