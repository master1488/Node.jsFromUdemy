const http = require('http');
const express = require('express')

const app = express();

//app.use((req, res, next) => {
  //  console.log('In the middleware');
    //next(); => not used (unnecessary middelware)

    app.use('/', (req, res, next) => { //this middelware is run on every request
        console.log('this always rungs');
        next();
    });

app.use('/add-product', (req, res, next) => { //add-product page is added
    console.log('the first middelware');
    res.send('<h1>Please add a product here!</h1>');
}); //no next() statement as we only want this page to load  

app.use('/', (req, res, next) => { //the default path added whenever the path is loaded, this page is shown
    //this has to be always at the end because no sub-URLs can be executed!!
    console.log('In another middleware');
    res.send('<h1>Hello from Express.js</h1>');
});

app.listen(3000);