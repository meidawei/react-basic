function loginAuth(OriginComponent) {
  return (props) => {
    // 从localStorage中获取token
    const token = localStorage.getItem('token')
    if (token) {
      // 如果有token, 则渲染OriginComponent
      return <OriginComponent {...props} />
    } else {
      return <h2>请先登录，再进行跳转到对应的页面中</h2>
    }
  }
}
export default loginAuth
