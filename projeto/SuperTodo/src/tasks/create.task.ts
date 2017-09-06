import { Task } from './task';

export function createTask(
  repo: { tasks: Task[] },
  task:Task
) {
  repo.tasks.push(task);
}
