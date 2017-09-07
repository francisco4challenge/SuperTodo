import { defineSupportCode, TableDefinition } from 'cucumber';
import { expect } from 'chai';
//import { getTaskFromTableRow } from '../../test/cucumber/utils';
//import { deleteTasks, Task, TaskStatus } from '../../src/tasks';

defineSupportCode(function ({ Given, When, Then }) {

  Given('os seguintes dados', function (dataTable, callback) {
/*
    const tasks = [
      getTaskFromTableRow(dataTable, 1),
      getTaskFromTableRow(dataTable, 2),
    ];
    db.tasks = tasks;

    deleteTasks(db, tasks);*/

  });

  When('o Jojo carrega no botão para destuir as tarefas', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('o Jojo já não vai ter tarefas', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
});