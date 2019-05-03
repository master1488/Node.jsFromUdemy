const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
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
        body.push(chunk);//push inserts data into the array
    });
    //on is a very important funciton in node.js as it allows to listen to requests => here it listens to data
    //by creatServer a listener is automatically installed (previous chapters)
    //alternatively: return can be written here if the above is executed
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log(parsedBody);
        fs.writeFileSync('message.txt', message);
    }); //req.on('end') is needed to "stop" the stream => buffer it so that the information can be processed
    
    //if this is moved in the code above, then it will not execute diretley as it is in the same code line as the buffer
    //because of the buffer, if this code is in the line above, it will not execute
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
