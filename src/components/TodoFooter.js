import { useSelector, useDispatch } from 'react-redux'
import { clearAll } from '../store/actions/todos'

export const TodoFooter = () => {
  const dispatch = useDispatch()
  // const todos = useSelector(state => state.todos)
  // // console.log(todos)
  // // 未完成任务数量
  // const leftCount = todos.filter(item => !item.done).length

  // 也可以直接在 selector 函数中，直接进行数据的筛选，拿到你要用的数据
  const leftCount = useSelector(
    state => state.todos.filter(item => !item.done).length
  )

  const doneCount = useSelector(
    state => state.todos.filter(item => item.done).length
  )
  // console.log(doneCount)

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>
      {doneCount > 0 && (
        <button
          className="clear-completed"
          onClick={() => dispatch(clearAll())}
        >
          Clear completed
        </button>
      )}
    </footer>
  )
}
