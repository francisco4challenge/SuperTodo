import { Endpoint } from '../express.endpoint.plugin';
import { Task } from './task';

interface TaskView {
  title: string;
  description: string;
  status: 'Por fazer' | 'Concluida';
}

export function getTasks(
  repo: { tasks: Task[] }
): TaskView[] {
  return repo.tasks.map(t =>
    ({
      title: t.title,
      description: t.description,
      status: t.status === 'TODO' ? 'Por fazer' : 'Concluida'
    }) as TaskView
  );
}

export function getTasksPlugin(
  getTasks: () => TaskView[]
): Endpoint {
  return {
    method: 'get',
    path: '/',
    handlers: [
      function (req, res) {
        const tasks = getTasks();
        res.render('tasks', { tasks });
      }
    ]
  };
}