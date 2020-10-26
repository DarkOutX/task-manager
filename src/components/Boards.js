import { connect } from 'react-redux'
import Board from './Board'
import Task from './Task'
// import "./MyComponent.css"

const Boards = ({ boards, tasks }) => {
  return (
    <div className="boards">
    	{boards.map(board => (
    		<Board key={board.id} {...board} tasks={tasks.filter(t => t.boardId == board.id)} />
		))}
    </div>
  );
}

const mapStateToProps = state => ({
  boards: state.boards,
  tasks: state.tasks
})

export default connect(mapStateToProps)(Boards)