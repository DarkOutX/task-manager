import { connect } from 'react-redux'
import Board from './Board'
// import "./MyComponent.css"

const Boards = ({ boards }) => {  
  return (
    <div className="boards">
    	{boards.map(board => (
    		<Board key={board.id} {...board} />
		))}
    </div>
  );
}

const mapStateToProps = state => ({
  boards: state.boards,
})

export default connect(mapStateToProps)(Boards)