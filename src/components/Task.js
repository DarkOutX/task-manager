import React from 'react';
import { connect } from 'react-redux'
import { deleteTask, editTask, toggleTask } from '../actions'

// import "./MyComponent.css"

const Task = ({ id, text, done, isEditing, dispatch }) => {
  let delBtn, editBtn, input;
  return (
    <li 
    	className="task" 
    	onClick={(e)=>{ dispatch(toggleTask(id, input.value)) }}	
    >
    	<input 
    		ref={node => (input = node)} 
    		value={text}
    		onChange={(e)=>{ dispatch(editTask(id, input.value)) }}
		    style={{
		      textDecoration: done ? 'line-through' : 'none'
		    }}
		/>
    	<a className="task-edit-btn">ED</a>
    	<a className="task-del-btn" onClick={(e)=>{ dispatch(deleteTask(id)) }}>DEL</a>
    </li>
  );
}

export default connect()(Task)