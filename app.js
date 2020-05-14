const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // to parse the req body sent through a form; not files, json, etc

app.use('/admin',adminRoutes); // /admin path filter
app.use(shopRoutes);

app.use((req, res, next) => { // catch all paths and methods
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);