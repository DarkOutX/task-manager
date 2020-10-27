import React from 'react';
import { connect } from 'react-redux'
import { deleteTask, editTask, toggleTask } from '../actions'

// import "./MyComponent.css"

const Task = ({ id, text, done, dispatch }) => {
  let input;
  const toggleEdit = () => {
  	if(input.disabled) input.removeAttribute("disabled");
  				  else input.disabled="true";
  }
  const toggleDone = (e) => {
  	if(e.target.tagName !== "A" && input.disabled) dispatch(toggleTask(id, input.value)) 
  }
  const handleDrag = (e) => {
	  window.draggingTask = {
      id: id
    }
  }
  return (
    <li className="task" onClick={toggleDone} draggable onDragStart={handleDrag}>
    	<input 
    		ref={node => (input = node)} 
    		value={text}
    		onChange={(e)=>{ dispatch(editTask(id, input.value)) }}
	    	style={{
		      textDecoration: done ? 'line-through' : 'none'
		    }}
		    disabled
		/>
    	<a className="task-edit-btn" onClick={toggleEdit}>ED</a>
    	<a className="task-del-btn" onClick={(e)=>{ dispatch(deleteTask(id)) }}>DEL</a>
    </li>
  );
}

export default connect()(Task)