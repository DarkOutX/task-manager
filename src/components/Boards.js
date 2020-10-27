import { connect } from 'react-redux'
import Board from './Board'
import BoardAdder from './BoardAdder.js';

const Boards = ({ boards, tasks }) => {
  return (
    <div className="boards">
    	{boards.map(board => (
    		<Board key={board.id} {...board} tasks={tasks.filter(t => t.boardId === board.id)} />
		))}
    	<BoardAdder/>
    </div>
  );
}

const mapStateToProps = state => ({
  boards: state.boards,
  tasks: state.tasks
})

export default connect(mapStateToProps)(Boards)