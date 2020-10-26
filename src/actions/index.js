let nextTaskId = 0
export const addTask = (boardId, text) => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  boardId: boardId,
  text,
})

let nextBoardId = 0
export const addBoard = (name) => ({
  type: 'ADD_BOARD',
  id: nextBoardId++,
  name,
})
