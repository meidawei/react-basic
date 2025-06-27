import React from 'react'
import HelloWorld from './HelloWorld'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isShowHW: true,
    }
  }

  switchHWSwitch() {
    this.setState({
      isShowHW: !this.state.isShowHW,
    })
  }

  render() {
    const { isShowHW } = this.state
    return (
      <div>
        <button onClick={(e) => this.switchHWSwitch()}>点击切换</button>
        {isShowHW && <HelloWorld />}
      </div>
    )
  }
}

export default App
