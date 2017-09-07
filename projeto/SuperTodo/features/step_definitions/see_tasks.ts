import { startServer } from '../../src/app/server';
import { Task, TaskStatus, TaskView, TaskViewStatus } from '../../src/tasks';
import { defineSupportCode, TableDefinition } from 'cucumber';
import { expect } from 'chai';
import { By, ThenableWebDriver } from 'selenium-webdriver';

defineSupportCode(function ({ Given, When, Then }) {

  Given('que existem as seguintes tarefas', async function (dataTable: TableDefinition) {
    const task = {
      title: dataTable.raw()[1][0],
      description: dataTable.raw()[1][1],
      status: dataTable.raw()[1][2]
    };
    const driver = this.driver as ThenableWebDriver;
    await driver.get('http://localhost:3000');
    await driver.findElement(By.name('createTitle')).sendKeys(task.title);
    await driver.findElement(By.name('createDescription')).sendKeys(task.description);
    await driver.findElement(By.name('createStatus')).sendKeys(task.status);
    await driver.findElement(By.name('createTaskButton')).click();
  });

  When('o Jojo vai à página das tarefas', async function () {
    return this.driver.get('http:localhost:3000');
  });

  Then('o Jojo deve ver as tarefas', async function (dataTable: TableDefinition) {
    const tasks: TaskView[] = dataTable.rows().map(row => {
      return {
        title: row[0],
        description: row[1],
        status: row[2] as TaskViewStatus
      };
    });
    const taskAsStrings = tasks.map(t => `${t.title} ${t.description} ${t.status}`);

    const driver = this.driver as ThenableWebDriver;
    const listItems = await driver.findElements(By.xpath(`//div[@id='tasks']/ul/li`));
    expect(listItems.length).to.be.eql(taskAsStrings.length);
    listItems.forEach(async e => expect(taskAsStrings).to.contain(await e.getText()));
  });

});