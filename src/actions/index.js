// let nextTaskId = 0
export const addTask = (boardId, text) => ({
  type: 'ADD_TASK',
  id: new Date().getTime(),
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
export const deleteBoardTasks = (boardId) => ({
  type: 'DELETE_BOARD_TASKS',
  boardId,
})

// let nextBoardId = 0
export const addBoard = (name) => ({
  type: 'ADD_BOARD',
  id: new Date().getTime(),
  name,
})
export const deleteBoard = (id) => ({
  type: 'DELETE_BOARD',
  id
})
export const renameBoard = (id, name) => ({
  type: 'RENAME_BOARD',
  id,
  name
})
