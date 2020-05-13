const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log('This always runs!');
    res.write('<h1>Add Product Page</h1>');
    next();
  });

app.listen(3000);