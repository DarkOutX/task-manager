// import React from 'react';
import svgDelete from "./../assets/svg/del-circled.svg"
import svgEdit from "./../assets/svg/edit.svg"
import { connect } from 'react-redux'
import { deleteTask, editTask, toggleTask } from '../actions'

// import "./MyComponent.css"

const Task = ({ id, boardId, text, done, dispatch }) => {
  let input;
  const toggleEdit = (e) => {
  	if(input.disabled) {
      input.removeAttribute("disabled");
  	  input.focus();
    } else input.disabled="true";
  }
  const toggleDone = (e) => {
  	if(e.target === input && input.disabled) dispatch(toggleTask(id, input.value)) 
  }
  const handleDrag = (e) => {
	  window.draggingTask = {
      id: id,
      sourceId: boardId
    }
  }
  return (
    <li 
      className="task" 
      onClick={toggleDone} 
      draggable 
      onDragStart={handleDrag}
      onMouseLeave={(e)=>{ input.disabled="true" }}
    >
    	<input 
    		ref={node => (input = node)} 
    		value={text}
    		onChange={(e)=>{ dispatch(editTask(id, input.value)) }}
	    	style={{
		      textDecoration: done ? 'line-through' : 'none'
		    }}
		    disabled
		  />
    	<button className="task-edit-btn" onClick={toggleEdit}>
        <img src={svgEdit} alt="Edit Task" />
      </button>
    	<button className="task-del-btn" onClick={(e)=>{ dispatch(deleteTask(id)) }}>
        <img src={svgDelete} alt="Delete Task" />
      </button>
    </li>
  );
}

export default connect()(Task)