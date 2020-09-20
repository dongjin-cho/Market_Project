var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.send('admin 이후 url');
});

router.get('/products', function(req, res) {
    //res.send('admin/products 이후 url');
    res.render('admin/products.html',{
        message: `<h1> tag </h1>`,
        online: 'express'
    }) // template밑의 위치, app.js에서 configure함
});
module.exports = router;