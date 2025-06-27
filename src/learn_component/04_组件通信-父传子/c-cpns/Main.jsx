import React, { Component } from 'react'
import axios from 'axios'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {
  // 构造函数
  constructor() {
    super()
    this.state = {
      banners: [],
      productList: [],
    }
  }

  // 生命周期函数
  // 组件被渲染到DOM：被挂载到DOM中
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      this.setState({
        banners,
        productList: recommend,
      })
    })
  }
  // 执行render函数
  render() {
    const { banners, productList } = this.state
    return (
      <div className="main">
        <div>Main</div>
        <MainBanner banners={banners} title="轮播图"></MainBanner>
        <MainBanner></MainBanner>
        <MainProductList productList={productList}></MainProductList>
      </div>
    )
  }
}

export default Main
