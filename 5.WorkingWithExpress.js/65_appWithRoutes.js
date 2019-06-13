const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');//for the 404 page

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));

//app.use(adminRoutes);
app.use('/admin', adminRoutes);//only routs going through /adim go through the admin routes the rest no
app.use(shopRoutes); //order matters => put the "/"-path in the end otherwise you dont get sub-pages ;)

//makes a 404 error page => old version
//app.use((req, res, next) => {
  //  res.status(404).send('<h1>404: Page not found</h1>');
//});

app.use((req, res, next) => {
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="formtitle"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(__dirname, 'views', 'PageNotFound.html'));
});

app.listen(3000);