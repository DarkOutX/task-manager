import React from 'react';
// import "./MyComponent.css"

const Task = ({ text }) => {  
  return (
    <div className="task">
    	{text}
    </div>
  );
}

export default Task;