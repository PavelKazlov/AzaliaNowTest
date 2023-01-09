interface ITasksStateArray {
  tasksArray: Array<{id: string; task: string}>
}

interface ITasksStateItem {
  id: string
  task: string
}
interface ITaskListItemProps {
  id: string
  taskId: string
  description: string
  activeTasksArray: Array<ITasksStateItem>
}
