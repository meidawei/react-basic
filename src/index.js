import ReactDOM from 'react-dom/client'

// import App from './App'
// import App from './learn_component/02_组件生命周期函数/App.jsx'
// import App from './learn_component/03_组件开发嵌套关系/App.jsx'
// import App from './learn_component/04_组件通信-父传子/App.jsx'
// import App from './learn_component/05_组件通信-子传父/App.jsx'
// import App from './learn_component/06_组件通信案例练习/App.jsx'
// import App from './learn_component/07_组件的插槽实现/App.jsx'
// import App from './learn_component/08_组件作用域插槽/App.jsx'
import App from './learn_component/09_非父子通信-Context/App.jsx'

// 创建真实的DOMRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将React元素渲染到DOMRoot中
root.render(<App />)
