//what the user will see
const path = require('path');//loads in the path module
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('In another middleware');
    //res.send('<h1>Hello from Express.js</h1>');
    //res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));//__dirname holds aboslut path on our operating system where the project is located
    //dont manually construct the path with / and \ because either in Linux or Windows it will not work
    //__dirname gives the path in which we use it => add '../' which means go up one level

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));//replaced with the root directory
});


module.exports = router;