import { connectPlugin } from '../express.endpoint.plugin';
import { getPlugins } from '../tasks';
import * as express from 'express';
import { Task } from '../tasks';
import * as path from 'path';
import * as bodyParser from 'body-parser';

export function startServer(db: { tasks: Task[] }) {
  const app = express();

  app.set('view engine', 'hbs');
  app.use(bodyParser.urlencoded());

  const taskPlugins = getPlugins(db);
  connectPlugin(app, taskPlugins.tasksPlugin);
  connectPlugin(app, taskPlugins.createTaskPlugin);
  connectPlugin(app, taskPlugins.deleteTaskPlugin);
  

  return new Promise((resolve, reject) => {
    app.listen(3000, function () {
      resolve();
    });
  });
}