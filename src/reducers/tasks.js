let initialState = {
  boards: [],
  tasks: [],
};
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
    default:
      return state
  }
}

export default tasks