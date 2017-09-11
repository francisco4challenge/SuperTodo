import { TaskView } from './task';
import { Task } from './task';
import { Endpoint } from '../express.endpoint.plugin';

export function deleteTask(
  repo: { tasks: Task[] },
  task: Task
): void {
  const toRemoveIndexes: number[] = [];
  let updatedRepo = repo.tasks;
  repo.tasks.forEach((t, index) => {
    if (t.title === task.title && t.description === task.description && t.status === task.status) {
      updatedRepo.splice(index, 1);
    }
  });
  repo.tasks = updatedRepo;
}

export function mapViewToTask(taskView: TaskView): Task {
  return {
    title: taskView.title,
    description: taskView.description,
    status: taskView.status === 'Por fazer' ? 'TODO' : 'DONE'
  };
}


export function deleteTaskPlugin(
  deleteTask: (task: TaskView) => void
): Endpoint {
  return {
    method: 'post',
    path: '/deleteTask',
    handlers: [
      function (req, res) {
        deleteTask(req.body);
        res.redirect('/');
      }
    ]
  };
}