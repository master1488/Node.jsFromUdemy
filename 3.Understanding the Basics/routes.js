
const fs = require('fs');

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
      }
      if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            fs.writeFileSync('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
      }
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>My First Page</title><head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
      res.write('</html>');
      res.end();
};

//module.exports = {
  //  handler: requestHandler,
    //someText: 'some hard coded Text'

//};
//modul.export is a global variable in n ode.js therefore it is able to find it from all files

//module.exports.handler =requestHandler;
//module.exports.someText = 'some hard coded text';
//the code above is similar to the commented out code

//the short cut is suppored by node.js but all these three mean the same
exports.someText = 'some hard coded text';
exports.handler =requestHandler;

//all these three methods are basically the same code