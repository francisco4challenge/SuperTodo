//Imports
const cmd = require('./cmd.js');
const path = require('path');


const args = process.argv.slice(1);
const cucumberModule = path.resolve(__dirname, '../node_modules/.bin/cucumber-js');
const command = `${cucumberModule} features/${args[2]}.feature --compiler  ts:ts-node/register`;

cmd.run(command).then((data) =>{
    console.log(data);
});





