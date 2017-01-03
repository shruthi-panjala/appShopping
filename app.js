var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
/*var  mongoose = require('mongoose');*/
var mongojs= require('mongojs');
var db = mongojs('shop', ['shop']);
var app = express();
/*app.get('/',function(req,res){
    console.log("i received get request");
    db.shop.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    })
})*/
/* routing objects*/
var index = require('./routes/index');
var about = require('./routes/about');
var shop = require('./routes/shop');
var checkout = require('./routes/checkout');
var placeOrder = require('./routes/placeOrder');
var tq = require('./routes/thankYou');
var dummy = require('./routes/dummy');

//var productAddCart = require('./routes/productAddCart');

//connecting to mongoose server.............
/*mongoose.connect('localhost:27017/shop');*/

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/about', about);
app.use('/men', shop);
//app.use('/computers',productAddCart);
app.use('/checkout', checkout);

app.use('/order', placeOrder);
app.use('/tq', tq);

app.use('/dummy', dummy);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
