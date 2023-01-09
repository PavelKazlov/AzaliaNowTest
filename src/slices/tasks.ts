import {Slices} from '@/constants'
import {createSlice} from '@reduxjs/toolkit'

const initialState: ITasksStateArray = {
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
  },
})

export const {
  actions: {updateTasksArray},
  reducer: taskReducer,
} = taskSlice
