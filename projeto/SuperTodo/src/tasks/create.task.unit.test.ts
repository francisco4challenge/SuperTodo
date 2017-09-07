import { create } from 'domain';
import { Task } from './task';
import { createTask, mapToTask } from './create.task';
import * as test from 'blue-tape';


test('should save task in repository', function (assert) {
  const repo = {
    tasks: [] as Task[]
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



test('should map to task', function (assert) {
  const taskInfo = {
    createTitle: 'Test1',
    createDescription: 'Desc1',
    createStatus: 'DONE'
  };
  const expectedTask = {
    title: 'Test1',
    description: 'Desc1',
    status: 'DONE'
  };

  const actualTask = mapToTask(taskInfo);

  assert.deepEqual(actualTask, expectedTask);
  assert.end();
});

