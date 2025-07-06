import React, { Component } from 'react'
import HomeBanner from './HomeBanner'

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Home Component</h2>
        <HomeBanner />
      </div>
    )
  }
}
export default Home
