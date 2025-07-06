import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { delTodo, toggleTodo, updateTodo } from '../store/actions/todos'
import { useState, useRef, useEffect } from 'react'

export const TodoItem = ({ id, text, done }) => {
  // 拿到 dispatch
  const dispatch = useDispatch()
  // 控制编辑状态的状态
  const [showEdit, setShowEdit] = useState(false)
  // 创建 ref 对象
  const inputRef = useRef(null)
  // 编辑文本框的状态
  const [todoName, setTodoName] = useState(text)

  useEffect(() => {
    // 编辑时的文本框获得焦点，只需要在编辑状态再获得即可
    if (showEdit) {
      inputRef.current.focus()
    }
  }, [showEdit])

  const onBlur = () => {
    if (todoName.trim() === '') return

    dispatch(updateTodo(id, todoName))

    // 去掉编辑状态
    setShowEdit(false)
  }

  // 修改任务名称
  const onUpdateTodo = e => {
    if (e.keyCode !== 13) return
    if (todoName.trim() === '') return

    dispatch(updateTodo(id, todoName))

    // 去掉编辑状态
    setShowEdit(false)
  }

  return (
    // 编辑时，添加类名：editing
    <li
      className={classNames({
        completed: done,
        // 编辑状态
        editing: showEdit
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={done}
          onChange={e => dispatch(toggleTodo(id, e.target.checked))}
        />
        {/* double click 双击事件 */}
        <label onDoubleClick={() => setShowEdit(true)}>{text}</label>
        <button
          className="destroy"
          onClick={() => dispatch(delTodo(id))}
        ></button>
      </div>
      {/* 编辑时，展示的文本框 */}
      <input
        className="edit"
        ref={inputRef}
        onBlur={onBlur}
        value={todoName}
        onChange={e => setTodoName(e.target.value)}
        onKeyDown={onUpdateTodo}
      />
    </li>
  )
}
