import { connect } from 'react-redux'
import { addBoard } from '../actions'

const BoardAdder = ({ dispatch }) => {
  return (
    <div className="board adder">
      <button onClick={e => { dispatch(addBoard("New Board")) }}>
        + Добавить список
      </button>
    </div>
  )
}

export default connect()(BoardAdder)