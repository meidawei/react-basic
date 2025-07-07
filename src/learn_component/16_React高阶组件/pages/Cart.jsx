import React, { PureComponent } from 'react'
import loginAuth from '../hoc/login_auth'

export class Cart extends PureComponent {
  render() {
    return (
      <div>
        <h2>购物车</h2>
        <p>购物车内容</p>
      </div>
    )
  }
}

export default loginAuth(Cart)
