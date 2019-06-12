const http = require('http');
const express = require('express')

const app = express();
//express() can be written as function ;) for more details click crt & click on 'express' to go to the source
//between app and server methods of express.js can be used e.g. app.listen
app.use((req, res, next) => {
    console.log('In the middleware');
});
//req = request, res = response, next is here to pass the response to the next middelwares
app.use((req, res, next) => {
    console.log('In another middleware');

});

const server = http.createServer(); 

server.listen(3000);