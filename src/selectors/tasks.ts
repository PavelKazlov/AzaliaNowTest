import {Slices} from '@/constants'

export const selectTasksArray = (state: any) => state[Slices.tasks].tasksArray
