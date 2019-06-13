//what the admin will see
const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
//now only going through /admin => set in the 65-appWithRoutes.js
//uses .get request
router.get('/add-product', (req, res, next) => {
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="formtitle"><button type="submit">Add Product</button></form>');
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));//this injects the root directory
});
//uses .post request
router.post('/add-product', (req, res, next) => { 
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;