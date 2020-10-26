import { connect } from 'react-redux'
import { addTask } from '../actions'

const TaskAdder = ({ dispatch, boardId }) => {  
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) return;

          dispatch(addTask(boardId, input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default connect()(TaskAdder)