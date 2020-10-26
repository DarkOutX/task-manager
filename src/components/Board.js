import Task from './Task'
import TaskAdder from './TaskAdder'

const Board = ({ id, name, tasks }) => {
  return (
    <div className="board">
    	<h4>{name}</h4>
    	<ul>
	    	{tasks.map(task => (
	    		<Task key={task.id} {...task} />
			))}
		</ul>
		<TaskAdder boardId={id} />
    </div>
  );
}

export default Board;