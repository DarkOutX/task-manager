import { connect } from 'react-redux'
import Task from './Task'
import TaskAdder from './TaskAdder'

const Board = ({ id, name, tasks }) => {
  return (
    <div className="board">
    	{name}
    	{tasks.map(task => (
    		<Task key={task.id} {...task} />
		))}
		<TaskAdder boardId={id} />
    </div>
  );
}

export default Board;