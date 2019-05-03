const http = require('http');
const routes = require('./routes.js');//this searches the file in the same folder named routes.js
//it will look for the module.export file and see what is registered there
console.log(routes.someText);
//the code above helps to create multiple exports
const server = http.createServer(routes.handler); 
//this says: Please store the function that are in routes for incoming requests
//.handler is used in order to refer to the specific module
server.listen(3000);
