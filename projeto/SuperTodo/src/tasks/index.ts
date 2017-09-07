import { createTask, mapToTask, createTaskPlugin } from './create.task';
import { getTasks, getTasksPlugin } from './get.tasks';
import { Task } from './task';
export * from './task';
export { deleteTasks } from './delete.tasks';

export function getPlugins(
  repo: { tasks: Task[]}
){
  return {
    tasksPlugin: getTasksPlugin(
      () => getTasks(repo)
    ),
    createTaskPlugin: createTaskPlugin(
      (task) => createTask(repo, mapToTask(task))
    )
  };
}