import { Task } from './task';
import * as test from 'blue-tape';
import { getTasks } from './get.tasks';


test('should get tasks in repository', function (assert) {
  const repo = {
    tasks: [
      {
        title: 'task1',
        description: 'description1',
        status: 'TODO'
      },
      {
        title: 'task2',
        description: 'description2',
        status: 'DONE'
      }
    ] as Task[]
  };

  const actualTasks = getTasks(repo);
  const expectedTasks = [
    {
      title: 'task1',
      description: 'description1',
      status: 'Por fazer'
    },
    {
      title: 'task2',
      description: 'description2',
      status: 'Concluida'
    }
  ];

  assert.deepEqual(actualTasks, expectedTasks);
  assert.end();
});