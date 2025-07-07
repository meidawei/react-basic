// import ReactDOM from 'react-dom/client'

// // import App from './App'
// // import App from './learn_component/02_组件生命周期函数/App.jsx'
// // import App from './learn_component/03_组件开发嵌套关系/App.jsx'
// // import App from './learn_component/04_组件通信-父传子/App.jsx'
// // import App from './learn_component/05_组件通信-子传父/App.jsx'
// // import App from './learn_component/06_组件通信案例练习/App.jsx'
// // import App from './learn_component/07_组件的插槽实现/App.jsx'
// // import App from './learn_component/08_组件作用域插槽/App.jsx'
// // import App from './learn_component/09_非父子通信-Context/App.jsx'
// // import App from './learn_component/10_非父子通信-EventBus/App.jsx'
// // import App from './learn_component/11_setState详细使用/App.jsx'
// // import App from './learn_component/12_render函数的优化/App.jsx'
// // import App from './learn_component/13_数据不可变的力量/App.jsx'
// // import App from './learn_component/14_ref获取DOM和组件/App.jsx'
// // import App from './learn_component/15_受控和非受控组件/App.jsx'
// // import App from './learn_component/20_React的动画实现/01_CSSTransition动画/App.jsx'
// // import App from './learn_component/20_React的动画实现/02_SwitchTransition/App.jsx'
// // import App from './learn_component/20_React的动画实现/03_TransitionGroup/App.jsx'
// import App from './learn_component/15_受控和非受控组件/App.jsx'

// // 创建真实的DOMRoot
// const root = ReactDOM.createRoot(document.getElementById('root'))
// // 将React元素渲染到DOMRoot中
// root.render(<App />)
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { ThemeProvider } from 'styled-components'

// import App from './learn_reactcss/01_ReactCSS的使用/App.jsx'
// import App from './learn_reactcss/02_普通的css写法/App.jsx'
// import App from './learn_reactcss/03_CSS_Modules/App'
// import App from './learn_reactcss/04_Less编写方式/App'
// import App from './learn_reactcss/05_CSS_in_js写法/App'
// import App from './learn_reactcss/06_classnames库/App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={{ color: 'purple', size: '50px' }}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// )

// ES6: 标签模板字符串
// const name = "why"
// const age = 18

// 1.模板字符串的基本使用
// const str = `my name is ${name}, age is ${age}`
// console.log(str)

// 2.标签模板字符串的使用
// function foo(...args) {
//   console.log(args)
// }

// // foo("why", 18, 1.88)
// foo`my name is ${name}, age is ${age}`

// import ReactDOM from 'react-dom/client'
// import { StrictMode } from 'react'
// import App from './App_class';
// import App from './01_类组件和函数组件/App_func'

// import App from "./02_组件生命周期函数/App"
// import App from "./03_组件开发嵌套关系/App"
// import App from "./04_组件通信-父传子/App"
// import App from "./05_组件通信-子传父/App"
// import App from "./06_组件通信案例练习/App"
// import App from "./07_组件的插槽实现/App"
// import App from "./08_组件作用域插槽/App"
// import App from "./09_非父子通信-Context/App"

// import App from "./10_非父子通信-EventBus/App"
// import App from "./11_setState详细使用/App"
// import App from "./12_render函数的优化/App"
// import App from "./13_数据不可变的力量/App"
// import App from "./14_ref获取DOM和组件/03_ref获取函数组件的DOM"
// import App from "./15_受控和非受控组件/App"

// import App from './learn_component/17_React的Portals/App'
// import App from "./16_React高阶组件/05_高阶组件应用-生命周期"
// import App from "./17_React的Portals/App"
// import App from './learn_component/18_React的fragment/App'
// import App from "./19_React的严格模式/App"

// import App from "./20_React的动画实现/01_CSSTransition动画/App"
// import App from "./20_React的动画实现/02_SwitchTransition/App"
// import App from './20_React的动画实现/03_TransitionGroup/App'"
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   // <StrictMode>
//   <App name="why" />
//   // </StrictMode>
// )
// import { StrictMode } from "react"
import ReactDOM from 'react-dom/client'
import App from './learn_reactrouter/App'
import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  // <StrictMode>
  <HashRouter>
    <Suspense fallback={<h3>Loading...</h3>}>
      <App />
    </Suspense>
  </HashRouter>
  // </StrictMode>
)
