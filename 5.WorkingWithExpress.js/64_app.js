const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

    app.use('/', (req, res, next) => {
        console.log('this always runs');
        next();
    });

app.post('/add-product', (req, res, next) => { //change from .use .get handels fires for incoming get requests (like a filter: only takes get requests)
    console.log('the first middelware');//instead of .use also .post can be used to filter for incoming post requests
    //additonal method to filter instead of .use are .delet .patch .put
    res.send('<form action="/product" method="POST"><input type="text" name="formtitle"><button type="submit">Add Product</button></form>');
});
app.use('/product', (req, res, next) => { 
    console.log(req.body);
    res.redirect('/');
});


app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express.js</h1>');
});

app.listen(3000);