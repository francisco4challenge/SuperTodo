import { createTask, mapToTask, createTaskPlugin } from './create.task';
import { getTasks, getTasksPlugin } from './get.tasks';
import { deleteTask, mapViewToTask, deleteTaskPlugin } from './delete.task';
import { Task } from './task';
export * from './task';


export function getPlugins(
  repo: { tasks: Task[]}
){
  return {
    tasksPlugin: getTasksPlugin(
      () => getTasks(repo)
    ),
    createTaskPlugin: createTaskPlugin(
      (task) => createTask(repo, mapToTask(task))
    ),
    deleteTaskPlugin: deleteTaskPlugin(
      task => deleteTask(repo, mapViewToTask(task))
    )
  };
}