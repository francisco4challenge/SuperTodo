//import { startServer } from '../../src/app/server';
//import { Task, TaskStatus, TaskView, TaskViewStatus } from '../../src/tasks';
import { defineSupportCode, TableDefinition } from 'cucumber';
import { expect } from 'chai';
import { By, ThenableWebDriver } from 'selenium-webdriver';


defineSupportCode(function ({ Given, When, Then }) {

  Given('que existe a seguinte tarefa', async function (dataTable: TableDefinition) {
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
  When('o Jojo carrega no botão para apagar a tarefa', async function () {
    const driver = this.driver as ThenableWebDriver;
    await driver.get('http://localhost:3000');
    await driver.findElement(By.name('deleteTaskButton0')).click();
  });
  Then('o Jojo já não vai ver a tarefa que apagou', async function (dataTable: TableDefinition) {
    const taskAsStrings: string[] = dataTable.rows().map(row => {
      return `${row[0]} ${row[1]} ${row[2]}`;
    });

    const driver = this.driver as ThenableWebDriver;
    //const listItems = await driver.findElements(By.css('#tasks > ul > form > li'));
    const listItems = await driver.findElements(By.xpath(`//div[@id="tasks"]/ul/form/li`));
    console.log('Items:');
    console.log(listItems.length);
    listItems.forEach(async e => expect(taskAsStrings).to.not.contain(await e.getText()));

  });
});

