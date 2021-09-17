const { exec } = require('child_process');

function execLinux() {
    //exec("sudo apt update", (error, stdout, stderr) => {});
    exec("mysql --version", (error, stdout, stderr) => {
        if(stderr) {
            console.log(stderr);
        }
    });

}

function execWindows() {
    
}

/*
if (process.platform === "win32") execWindows();
else if(process.platform === "linux") execWindows();*/