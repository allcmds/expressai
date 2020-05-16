const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // to parse the req body sent through a form; not files, json, etc
app.use(express.static(path.join(__dirname, 'public'))); // grant read access to the public folder

app.use('/admin',adminData.routes); // /admin path filter
app.use(shopRoutes);

app.use((req, res, next) => { // catch all paths and methods
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);