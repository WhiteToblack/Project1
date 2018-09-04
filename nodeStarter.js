var server = require('http');
var app = require('./app');


var httpServer = server.createServer(app.handleRequest).listen(8000);
console.log('8000 port listening!');

app.getNodeProperties();
