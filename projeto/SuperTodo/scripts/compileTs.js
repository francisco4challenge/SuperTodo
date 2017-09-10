const cmd = require('./cmd.js');

const sliced = process.argv.slice(1);
console.log(sliced);

const args = process.argv;
const command = `tsc ${args[2]}`;
console.log(command);

cmd.runAsync(command, function (err, data, stderr) {
    console.log(data);
}); 


