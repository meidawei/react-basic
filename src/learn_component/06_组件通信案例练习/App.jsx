import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      tabIndex: 0,
      titles: ['流行', '新款', '精选'],
    }
  }

  tabClick(tabIndex) {
    this.setState({
      tabIndex,
    })
  }

  render() {
    const { tabIndex, titles } = this.state

    return (
      <div className="app">
        <h2>当前选中: {titles[tabIndex]}</h2>
        <TabControl
          titles={titles}
          tabClick={(index) => this.tabClick(index)}
        />
      </div>
    )
  }
}

export default App
