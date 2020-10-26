const boards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //   )
    default:
      return state
  }
}

export default boards