import { PureComponent } from 'react'

// 定义组件：给一些需要特殊数据的组件，注入props
// OriginComponent是原始组件，enhancedProps是高阶组件
function enhancedUserInfo(OriginComponent) {
  class NewComponent extends PureComponent {
    // 构造函数继承
    constructor(props) {
      super(props)
      this.state = {
        userInfo: {
          title: '我是标题',
          content: '我是内容',
          name: '哆啦A梦',
          level: 99,
        },
      }
    }
    render() {
      // 将获取到的数据传递给原始组件
      return <OriginComponent {...this.props} {...this.state.userInfo} />
    }
  }
  return NewComponent
}

export default enhancedUserInfo
