const path = require('path');
// for ordering(shop) prods and services
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('shop.js',adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop'); // instead of sending a file - we render the pug view shop.pug
});

module.exports = router;