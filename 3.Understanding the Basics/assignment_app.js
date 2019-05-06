const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Greetingspage</title><head>');
    res.write('<body><h1>Hello!</h1></body>');
    res.write('<body><h2>Create a new user with the form below</h2></body>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Create new user</button></form></body>');
    res.write('<div class="vertical-menu"><a href="http://localhost:3000/users">Go to Userlist</a</div>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Current user</title><head>');
    res.write('<body><h2>This is a list of user</h2></body>');
    res.write('<body><ul><li>James Bond</li><li>Roland McDonald</li><li>Donald Duck</li></ul></body>');
    res.write('<div class="vertical-menu"><a href="http://localhost:3000/">Go to Landingpage</a</div>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user') {
    res.write('<html>');
    res.write('<head><title>Set new user</title><head>');
    res.write('<body><h2>This is a list of user</h1></body>');
    res.write('<body><ul><li>James Bond</li></body>')
    res.write('<div class="vertical-menu"><a href="http://localhost:3000/">Go to Landingpage</a</div>');
    res.write('</html>');
    return res.end();
  }    
    if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk)=>{
        body.push(chunk);
        const parsedBody = Buffer.concat(body).toString();
        const CreatedUser = parsedBody.split('=')[1];
        console.log(CreatedUser);    
    });
    res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();//Dieser Abschnitt muss zusätzlich eingefügt werden => Unterschied zur Lösung

    }
});
 
server.listen(3000);
