import svgAdd from "./../assets/svg/add-circled.svg"
import { connect } from 'react-redux'
import { addTask } from '../actions'

const TaskAdder = ({ dispatch, boardId }) => {  
  let input

  return (
    <div className="task-adder">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) return;

          dispatch(addTask(boardId, input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">
        	<img src={svgAdd} alt="Add Task" />
    	</button>
      </form>
    </div>
  )
}

export default connect()(TaskAdder)