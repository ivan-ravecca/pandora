This is a test using some info from: http://ponyfoo.com/articles/cross-tab-communication


Using server
From: http://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server

Install connect and serve-static with NPM

$ npm install connect serve-static

Create server.js file with this content:

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);

Run with Node.js

$ node server.js

You can now go to http://localhost:8080/maaageeecccc.html