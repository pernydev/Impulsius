var express = require('express');
var app = express();
const colors = require('colors');

var SITE = colors.bold.cyan("[Website] ");
var INFO = colors.bold.green("[Info] ");
var PORT = "8080";

console.log(SITE+'Turning the website on...');
app.set('view engine', 'ejs');

app.use(express.static("frontend/public"));

console.log(SITE+'Loading pages...');
app.get('/', function(req, res) {
    res.render('frontend/pages/index');
 });

console.log(SITE+'Opening the website...');
app.listen(PORT);

console.log(' ')
console.log(INFO+'Welcome to Implusius, a Gaming Panel powered by Pterodactyl Wings!')
console.log(INFO+'Your implusius instance is now running in '+PORT)
