const http = require('http');
const routes = require('./41_routes.js');

console.log(routes.someText);


const server = http.createServer(routes.handler); 


server.listen(3000);
