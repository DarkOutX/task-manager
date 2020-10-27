import svgDelete from "./../assets/svg/del.svg"
import Task from './Task'
import TaskAdder from './TaskAdder'
import { connect } from 'react-redux'
import { deleteBoard, moveTask, renameBoard, deleteBoardTasks } from '../actions'

const Board = ({ id, name, tasks, dispatch }) => {

	let input;

	const handleDrop = (e) => {
		if(!window.draggingTask) return;
		let taskId = window.draggingTask.id;
		dispatch(moveTask(taskId, id));
	}
	const allowDrop = (e) => {
		e.preventDefault();	
		handleDrop();
	}

  return (
    <div 
    	className="board" 
    	onDrop={handleDrop} 
    	onDragOver={allowDrop}
	>
    	<div 
    		className="board-btn-delete"
    		onClick={(e)=>{ dispatch(deleteBoard(id)); dispatch(deleteBoardTasks(id)) }}
		>
			<img src={svgDelete} alt="Delete Board" />
		</div>
		<input
			className="board-title"
    		ref={node => (input = node)} 
    		value={name}
    		onChange={(e)=>{ dispatch(renameBoard(id, input.value)) }}
		/>
    	<ul>
	    	{tasks.map(task => (
	    		<Task 
	    			key={task.id + "" + id} 
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