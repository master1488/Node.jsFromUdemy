const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
        //the return will make the funciton exection to quit
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
    });
server.listen(3000);