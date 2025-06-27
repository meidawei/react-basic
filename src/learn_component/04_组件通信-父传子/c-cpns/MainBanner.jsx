import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { title, banners } = this.props
    return (
      <div className="banner">
        <h2>封装一个轮播图：{title}</h2>
        <ul>
          {banners.map((item) => {
            return <li key={item.acm}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

// 新知识
MainBanner.propTypes = {
  // banners必须是数组
  banners: PropTypes.array,
  // title必须是字符串
  title: PropTypes.string,
}

// 默认值
MainBanner.defaultProps = {
  banners: [],
  title: '默认标题',
}
export default MainBanner
