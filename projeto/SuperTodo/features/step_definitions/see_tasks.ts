import { startServer } from '../../src/app/server';
import { createTask, Task, TaskStatus } from '../../src/tasks';
import { defineSupportCode, TableDefinition } from 'cucumber';
import { expect } from 'chai';
import { By, ThenableWebDriver } from 'selenium-webdriver';

defineSupportCode(function({ Given, When, Then }) {
    const db = { tasks: [] as Task[] };

    Given('as tarefas com os seguintes dados', function(dataTable: TableDefinition) {
        const task: Task = {
            title: dataTable.raw()[1][0],
            description: dataTable.raw()[1][1],
            status: dataTable.raw()[1][2] as TaskStatus
        };
        createTask(db, task);
    });

    When('o Jojo vai à página das suas tarefas', async function() {
        await startServer(db);
        return this.driver.get('http:localhost:3000');
    });

    Then('o Jojo deve ver as tarefas', function(dataTable: TableDefinition) {
        const title = dataTable.raw()[1][0];
        const description = dataTable.raw()[1][1];
        const status = dataTable.raw()[1][2];
        return (this.driver as ThenableWebDriver)
            .findElement(By.name('task1'))
            .getText()
            .then(function(actualText) {
                expect(actualText).to.be.eql(`${title} ${description} ${status}`);
            });
    });

});