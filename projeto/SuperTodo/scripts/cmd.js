var exec = require('child_process').exec;

var commandline = {
    run: run
};

function run(command) {
    return new Promise((resolve, reject) => {
        return exec(command, (error, stdout, stderr)=>{
            if(stdout) resolve(stdout);
            else reject(stderr);
        });
    });
}

module.exports = commandline;
