require('chromedriver');
import * as seleniumWebdriver from 'selenium-webdriver';
import { defineSupportCode } from 'cucumber';

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();
}

defineSupportCode(function ({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
});