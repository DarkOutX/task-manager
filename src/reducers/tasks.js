const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          boardId: action.boardId,
          text: action.text
        }
      ]
    case 'DELETE_TASK':
      return state.filter(t => t.id !== action.id);
    case 'DELETE_BOARD_TASKS':
      return state.filter(t => t.boardId !== action.boardId);
    case 'EDIT_TASK':
      return state.map(t =>
        t.id === action.id ? { ...t, text: action.text } : t
      )
    case 'MOVE_TASK':
      return state.map(t =>
        t.id === action.id ? { ...t, boardId: action.boardId } : t
      )
    case 'TOGGLE_TASK':
      return state.map(t =>
        t.id === action.id ? { ...t, done: !t.done } : t
      )
    default:
      return state
  }
}

export default tasks