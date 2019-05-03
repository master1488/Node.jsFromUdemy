const http = require('http');

//this function listens to incoming requests and then replies correspondingly
//function rqListener(req, res) {
//}
//http.createServer(rqListener);
//the same result is also possible with annonmous functions
// generally the response and request is an event-driven achtitecture

//the syntax with annonymous function is below
//http.createServer(function(req, res){
//});

//this example uses the arrow functions
const server = http.createServer((req, res) => {
    console.log(req);
    process.exit(); //makes the process to stop looping after the request
    });
server.listen(3000);
//in production it takes the default of port 80 => with the port 3000 a local host is opened
//if this file is executed, it listens constantly to the server
// when => localhost:3000 is typed in the windows a query is sent



