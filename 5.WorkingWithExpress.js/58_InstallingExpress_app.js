const http = require('http');
const express = require('express')

const app = express();
//express() can be written as function ;) for more details click crt & click on 'express' to go to the source
//between app and server methods of express.js can be used e.g. app.listen
app.use((req, res, next) => {
    console.log('In the middleware');
    next(); //allows the request to continue to the next middelware
});
//req = request, res = response, next is here to pass the response to the next middelwares
app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express.js</h1>');//header is automatically set to text/html
    //the internal workings of the send method can be found in the github repository
});

app.listen(3000); //with listen, the server can be replaced
//const server = http.createServer(app); 
//server.listen(3000);