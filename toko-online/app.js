
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engine = require('ejs-blocks');
require('./app_toko_online/models/db');//memanggil file db.js untuk koneksi ke database

//perbaikan 2
var indexRouter = require('./app_toko_online/routes/index');
var usersRouter = require('./app_toko_online/routes/users');
var productsRouter = require('./app_toko_online/routes/products');
var controllerProducts = require('./app_toko_online/controllers/ControllerProducts');
var app = express();


// view engine setup
app.set('views', path.join(__dirname,'app_toko_online', 'views'));//perbaikan 1
app.set('view engine', 'ejs');
app.engine('ejs', engine);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//serving bootstrap
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

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
