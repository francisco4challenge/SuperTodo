//import { startServer } from '../../src/app/server';
//import { Task, TaskStatus, TaskView, TaskViewStatus } from '../../src/tasks';
import { defineSupportCode, TableDefinition } from 'cucumber';
import { expect } from 'chai';
import { By, ThenableWebDriver } from 'selenium-webdriver';


defineSupportCode(function ({ Given, When, Then }) {

  Given('a seguinte tarefa', function (dataTable: TableDefinition) {
    const task = {
      title: dataTable.raw()[1][0],
      description: dataTable.raw()[1][1],
      status: dataTable.raw()[1][2]
    };
    

  });
  When('o Jojo carrega no botão para apagar a tarefa', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
  Then('o Jojo já não vai ver a tarefa que apagou', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
});
