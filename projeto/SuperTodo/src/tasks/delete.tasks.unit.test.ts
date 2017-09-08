import { create } from 'domain';
import { Task, TaskView } from './task';
import { deleteTask, mapViewToTask } from './delete.task';
import * as test from 'blue-tape';


test('should delete task in repository', function (assert) {
    const task: Task = {
        title: 'example',
        description: 'stuff',
        status: 'TODO'
    };
    const repo = {
        tasks: [
            task
        ] as Task[]
    };

    deleteTask(repo, task);

    assert.deepEqual(repo.tasks.length, 0);
    assert.end();
});



test('should map to task', function (assert) {
    const taskView: TaskView = {
        title: 'Test1',
        description: 'Desc1',
        status: 'Concluida'
    };
    const expectedTask = {
        title: 'Test1',
        description: 'Desc1',
        status: 'DONE'
    };

    const actualTask = mapViewToTask(taskView);

    assert.deepEqual(actualTask, expectedTask);
    assert.end();
});