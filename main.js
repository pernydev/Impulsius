var express = require('express');
const { exec } = require('child_process');
var app = express();
const colors = require('colors');

var SITE = colors.bold.cyan("[Website] ");
var INFO = colors.bold.green("[Info] ");
var PORT = "8080";

exec("mysqla --version", (error, stdout, stderr) => {
    if(stderr) {
        console.log(stderr);
    }
});

console.log(SITE + 'Turning the website on...');
app.set('view engine', 'ejs');

app.use(express.static("views/frontend/public"));

console.log(SITE + 'Loading pages...');
app.get('/', function (req, res) {
    res.render('frontend/pages/index', 
        { server: [
            { name: 'My Impulsius server', ramUsed: 745, ramAvl: 2048, cpuUsed: 74, cpuAvl: 100, diskUsed: 1764, diskAvl: 8192, ID: "92jd3578"}
        ]
    });
});

app.get('/auth/login', function (req, res) {
    res.render('frontend/pages/auth/login');
});

app.get('/auth/register', function (req, res) {
    res.render('frontend/pages/auth/register');
});

app.get('/install', function (req, res) {
    res.render('frontend/pages/installer/install');
});

app.get('/server/:serverID', function (req, res) {
    res.render('frontend/pages/server/console', {
        server: {
            "ID": req.params.serverID,
            "details": [
                { name: 'Epic hub server', ramUsed: 10, ramAvl: 1024, cpuUsed: 2, cpuAvl: 100, diskUsed: 4024, diskAvl: 8024},
            ]
        }
    });
});

console.log(SITE + 'Opening the website...');
app.listen(PORT);

console.log(' ')
console.log(INFO + 'Welcome to Implusius, a Gaming Panel powered by Pterodactyl Wings!')
console.log(INFO + 'Your implusius instance is now running in ' + PORT)
