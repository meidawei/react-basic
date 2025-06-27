import React from 'react'
class HelloWorld extends React.Component {
  // 1.构造方法：constructor
  constructor(props) {
    console.log('Hello World constructor')
    // super是调用父类的构造函数
    // 在子类中必须调用super()，否则this将未定义
    // 2.调用父类的构造函数
    super(props)
    this.state = {
      message: 'Hello World Component',
    }
  }
  changeText() {
    // 3.修改state
    this.setState({
      message: 'Hello World Component Changed',
    })
  }
  // 2.执行render函数
  render() {
    console.log('Hello World render')
    const { message } = this.state
    // 4.返回React元素
    return (
      <div>
        <h1>{message}</h1>
        <p>{message}是React程序员的第一个代码</p>
        <button onClick={() => this.changeText()}>Change Text</button>
      </div>
    )
  }

  // 3.组件被渲染到DOM：被挂载到DOM中
  componentDidMount() {
    console.log('Hello World componentDidMount')
  }

  // 4.组件更新完成：DOM发生更新
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Hello World componentDidUpdate')
    console.log('prevProps:', prevProps)
    console.log('prevState:', prevState)
    console.log('snapshot:', snapshot)
  }

  // 5.组件卸载：从DOM中移除
  componentWillUnmount() {
    console.log('Hello World componentWillUnmount')
  }

  // 6.不经常使用的生命周期补充
  shoul1dComponentUpdate(nextProps, nextState) {
    console.log('Hello World shouldComponentUpdate')
    // 返回true表示组件需要更新，返回false表示组件不需要更新
    return true
  }

  // 7.错误边界：捕获子组件的错误
  getSnapshotBeforeUpdate() {
    console.log('Hello World getSnapshotBeforeUpdate')
    // 返回一个值，这个值会作为componentDidUpdate的第三个参数
    return {
      scrollPosition: 1000,
    }
  }
}

export default HelloWorld
