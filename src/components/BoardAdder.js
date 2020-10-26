import { connect } from 'react-redux'
import { addBoard } from '../actions'

const BoardAdder = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) return;

          dispatch(addBoard(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Board</button>
      </form>
    </div>
  )
}

export default connect()(BoardAdder)