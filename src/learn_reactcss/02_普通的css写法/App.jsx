import React, { PureComponent } from 'react'
import Home from './home/Home'
import Profile from './profile/Profile'
import './App.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">我是标题</h2>
        <h2 className="content">我就是内容</h2>
        <Home />
        <Profile />
      </div>
    )
  }
}

export default App
