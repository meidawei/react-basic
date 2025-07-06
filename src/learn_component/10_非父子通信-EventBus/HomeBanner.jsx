import React, { Component } from 'react'
import eventBus from './utils/event-bus'

export class HomeBanner extends Component {
  // 上一个点击
  prevClick() {
    console.log('上一个')
    eventBus.emit('bannerPrevClick', 'linlongzhan', 18, 1.88)
  }

  // 下一个点击
  nextClick() {
    console.log('下一个')
    eventBus.emit('bannerNextClick', {
      nickname: 'linlongzhan',
      leval: 31,
    })
  }

  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={() => this.prevClick}>上一个</button>
        <button onClick={() => this.nextClick}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner
