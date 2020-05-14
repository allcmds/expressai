const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // to parse the req body sent through a form; not files, json, etc

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);