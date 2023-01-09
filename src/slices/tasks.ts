import {Slices} from '@/constants'
import {createSlice} from '@reduxjs/toolkit'

const initialState: TasksStateArray = {
  tasksArray: [],
}

const taskSlice = createSlice({
  name: Slices.tasks,
  initialState,
  reducers: {
    updateTasksArray: (state, action) => {
      return {
        ...state,
        tasksArray: action.payload,
      }
    },
    clearTasksArray: state => {
      return {
        ...state,
        tasksArray: [],
      }
    },
  },
})

export const {
  actions: {updateTasksArray, clearTasksArray},
  reducer: taskReducer,
} = taskSlice
