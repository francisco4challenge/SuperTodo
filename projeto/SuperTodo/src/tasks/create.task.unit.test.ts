import { Task } from './task';
import { createTask } from './create.task';
import * as test from 'blue-tape';


test('should save task in repository', function (assert) {
  const repo = {
    tasks:[] as Task[]
  };
  const task: Task = {
    title: 'example',
    description: 'stuff',
    status: 'TODO'
  };

  createTask(repo, task);

  assert.deepEqual(repo.tasks[0], task);
  assert.end();
});