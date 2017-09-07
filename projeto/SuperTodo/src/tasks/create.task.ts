import { TaskStatus } from './';
import { Endpoint } from '../express.endpoint.plugin';
import { Task } from './task';

export function createTask(
  repo: { tasks: Task[] },
  task: Task
) {
  repo.tasks.push(task);
}

interface TaskFormInfo {
  createTitle: string;
  createDescription: string;
  createStatus: string;
}

export function mapToTask(taskInfo: TaskFormInfo): Task {
 return {
  title: taskInfo.createTitle,
  description: taskInfo.createDescription,
  status: taskInfo.createStatus as TaskStatus
 };
}

export function createTaskPlugin(
  createTask: (task: TaskFormInfo) => void
): Endpoint {
  return {
    method: 'post',
    path: '/tasks',
    handlers: [
      function (req, res) {
        createTask(req.body);
        res.redirect('/');
      }
    ]
  };
}
