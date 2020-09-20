var express = require('express');
var router = express.Router();

function testMiddleWare(req, res, next){
    console.log('fist middle ware');
    next();
} // 만들어서 미들웨어 추가 가능, get참조...
//router.get('/', testMiddleWare, function(req, res) {
function secondMiddleWare(req, res, next){
    console.log('second middle ware');
    next();
} 
// 실제 미들웨어가 쓰는 법
// function loginRequire(req, res, next){
//     if(!logined){
//         res.redirect(login창으로 )
//     }else{
//         next();
//     }
// }

/* GET home page. */
router.get('/', testMiddleWare, secondMiddleWare, function(req, res) {
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