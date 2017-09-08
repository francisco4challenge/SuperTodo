import { TaskView } from './task';
import { Task } from './task';
import { Endpoint } from '../express.endpoint.plugin';

export function deleteTask(
    repo: { tasks: Task[] },
    task: Task
): void{
    repo.tasks = repo.tasks.filter(t =>{
        t.title === task.title && t.description ===task.description && t.status === task.status;
    });
}

export function mapViewToTask(taskView: TaskView ): Task {
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