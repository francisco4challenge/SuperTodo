import { connectPlugin } from '../express.endpoint.plugin';
import { getPlugins } from '../tasks';
import * as express from 'express';
import { Task } from '../tasks';

export function startServer(db: { tasks: Task[] }) {
  const app = express();

  const taskPlugins = getPlugins(db);
  connectPlugin(app, taskPlugins.tasksPlugin);

  return new Promise((resolve, reject) => {
    app.listen(3000, function () {
      resolve();
    });
  });
}