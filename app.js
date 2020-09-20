var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nunjunks = require('nunjucks');


// Routes loading
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var contactsRouter = require('./routes/contacts');

var app = express();
var port = 3000;

nunjunks.configure('template', {
  autoescape: true,
  express: app //위의 app객체 지정
}) // template 폴더 지정

app.get('/testlink', (req, res) => {
  res.send('hello express!@!@!@');
});
// app.listen(port, ()=>{
//   console.log('Express 3000 port')
//})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 미들웨어 셋팅, app.use자체가 미들웨어다.

app.use(logger('dev')); // logger, 중간에 가로채서 GET, POST등 캐치가능
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// function vipMiddleWare(req, res, next){
//   console.log('vipMiddleWare middle ware');
//   next();
// } 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
//app.use('/admin', vipMiddleWare, adminRouter);
app.use('/contacts', contactsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
