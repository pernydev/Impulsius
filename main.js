var express = require('express');
var app = express();
const colors = require('colors');

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
            { name: 'Epic hub server', ramUsed: 10, ramAvl: 1024, cpuUsed: 2, cpuAvl: 100, diskUsed: 4024, diskAvl: 8024, ID: "92jd3578"},
            { name: 'Epic event server', ramUsed: 10, ramAvl: 2024, cpuUsed: 9, cpuAvl: 100, diskUsed: 4024, diskAvl: 8024, ID: "73id0563"},
            { name: 'Super Epic minigame server', ramUsed: 103, ramAvl: 2024, cpuUsed: 9, cpuAvl: 100, diskUsed: 4024, diskAvl: 8024, ID: "63y5967"},
            { name: 'Very epic survival server', ramUsed: 10, ramAvl: 6024, cpuUsed: 2, cpuAvl: 100, diskUsed: 4224, diskAvl: 8024, ID: "37hj9472   s"}
        ]
    });
});

app.get('/auth/login', function (req, res) {
    res.render('frontend/pages/auth/login');
});

app.get('/auth/register', function (req, res) {
    res.render('frontend/pages/auth/register');
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
