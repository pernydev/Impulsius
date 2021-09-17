const { exec } = require('child_process');

function execLinux() {
    exec("sudo apt update", (error, stdout, stderr) => {});
    exec("mysql --version", (error, stdout, stderr) => {
        if(stderr) {
            exec("sudo apt install mysql-server", (error, stdout, sterr) => {});
        }
    });

}

exports.execLinux = execLinux;