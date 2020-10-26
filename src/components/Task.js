import React from 'react';
// import "./MyComponent.css"

const Task = ({ text }) => {  
  return (
    <li className="task">
    	{text}
    </li>
  );
}

export default Task;