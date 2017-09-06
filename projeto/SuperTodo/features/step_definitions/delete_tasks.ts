import { defineSupportCode, TableDefinition } from 'cucumber';
import { expect } from 'chai';

defineSupportCode(function({ Given, When, Then }) {

    Given('os seguintes dados', function (dataTable, callback) {
       
        const tasks = {
            
        };
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

      When('o Jojo carrega no botão para destuir as tarefas', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

      Then('o Jojo já não vai ter tarefas', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });
});