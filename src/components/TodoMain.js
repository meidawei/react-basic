import { useSelector, useDispatch } from 'react-redux'
import { toggleAll } from '../store/actions/todos'

import { TodoItem } from './TodoItem'

export const TodoMain = () => {
  // 获取 redux 中提供的 todos 数据
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  // 先根据 todos Redux 中的任务列表状态数据，来得到全选按钮的选中状态
  const checkAll = todos.every(item => item.done)
  // console.log('全选按钮的选中状态：', checkAll)

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={checkAll}
        onChange={e => dispatch(toggleAll(e.target.checked))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map(item => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  )
}
