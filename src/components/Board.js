import Task from './Task'
import TaskAdder from './TaskAdder'
import { connect } from 'react-redux'
import { deleteBoard } from '../actions'

const Board = ({ id, name, tasks, dispatch }) => {
  return (
    <div className="board">
    	<div 
    		className="board-delete-btn"
    		onClick={(e)=>{ dispatch(deleteBoard(id)) }}
		>
			X
		</div>
    	<h4>{name}</h4>
    	<ul>
	    	{tasks.map(task => (
	    		<Task 
	    			key={task.id} 
	    			{...task}
	    			isEditing={true}
	    			onClick={(e) => {}}
	    			onEditClick={(e) => {}}
	    			onDeleteClick={(e) => {}}  
    			/>
			))}
		</ul>
		<TaskAdder boardId={id} />
    </div>
  );
}

export default connect()(Board)