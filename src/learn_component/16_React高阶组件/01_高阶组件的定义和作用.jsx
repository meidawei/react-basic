import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false,
    }
  }
  loginClick() {
    this.setState({ isLogin: true })
    localStorage.setItem('token', true)
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <h2>App组件</h2>
        <button onClick={(e) => this.loginClick()}>登录</button>
        <Cart />
      </div>
    )
  }
}

export default App
