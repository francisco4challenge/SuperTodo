import { getTasks, getTasksPlugin } from './get.tasks';
import { Task } from './task';
export * from './create.task';
export * from './task';

export function getPlugins(
  repo: { tasks: Task[]}
){
  return {
    tasksPlugin: getTasksPlugin(
      () => getTasks(repo)
    )
  };
}