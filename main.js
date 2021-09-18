var express = require('express');
var installer = require('./views/backend/db/dbInstaller');
var app = express();
const colors = require('colors');

installer.execLinux();

var SITE = colors.bold.cyan("[Website] ");
var INFO = colors.bold.green("[Info] ");
var PORT = "8080";

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

app.get('/installing', function (req, res) {
    res.render('frontend/pages/installer/installing');
});

app.get('/setup', function (req, res) {
    res.render('frontend/pages/installer/setup');
});

app.get('/server/:serverID', function (req, res) {
    res.render('frontend/pages/server/console', {
        server: {
            "ID": req.params.serverID,
            name: 'My Impulsius server', 
            ramUsed: 745, 
            ramAvl: 2048, cpuUsed: 74, 
            cpuAvl: 100, diskUsed: 1764, 
            diskAvl: 8192, 
            ID: "92jd3578"
        }
    });
});

console.log(SITE + 'Opening the website...');
app.listen(PORT);

console.log(' ')
console.log(INFO + 'Welcome to Implusius, a Gaming Panel powered by Pterodactyl Wings!')
console.log(INFO + 'Your implusius instance is now running in ' + PORT)
