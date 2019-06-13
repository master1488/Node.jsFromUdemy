const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));//this is the function to parse incoming html elements

    app.use('/', (req, res, next) => {
        console.log('this always runs');
        next();
    });

app.use('/add-product', (req, res, next) => { 
    console.log('the first middelware');
    res.send('<form action="/product" method="POST"><input type="text" name="formtitle"><button type="submit">Add Product</button></form>');
});
app.use('/product', (req, res, next) => { 
    console.log(req.body);//req.body returns "undefined" => a parser has to be registered
    res.redirect('/');//will automatically redirect to the / page
});


app.use('/', (req, res, next) => { //this has to be always at the end because no sub-URLs can be executed!!
    console.log('In another middleware');
    res.send('<h1>Hello from Express.js</h1>');
});

app.listen(3000);