let nextTaskId = 0
export const addTask = (boardId, text) => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  boardId: boardId,
  done: false,
  text,
})
export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  id
})
export const editTask = (id, text) => ({
  type: 'EDIT_TASK',
  id,
  text
})
export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  id,
})
export const moveTask = (id, boardId) => ({
  type: 'MOVE_TASK',
  boardId,
  id,
})

let nextBoardId = 0
export const addBoard = (name) => ({
  type: 'ADD_BOARD',
  id: nextBoardId++,
  name,
})
export const deleteBoard = (id) => ({
  type: 'DELETE_BOARD',
  id
})
