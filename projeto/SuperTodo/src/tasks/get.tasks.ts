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
        const task = getTasks()[0];
        res.header('Content-Type', 'text/html');
        res.send(`<!DOCTYPE html>
        <HTML>
          <HEAD>
              <TITLE>
                Tasks
              </TITLE>
          </HEAD>
        <BODY>
          <H1 name="task1">${task.title} ${task.description} ${task.status}</H1>
        </BODY>
        </HTML>`);
      }
    ]
  };
}