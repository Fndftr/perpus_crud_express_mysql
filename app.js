var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const moment = require("moment");

var db = require('./config/db')
var flash = require('express-flash')
var session = require('express-session')
var methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bukuRouter = require('./routes/buku')
var anggotaRouter = require('./routes/anggota')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((req, res, next) => {
  req.db = db
  next()
})
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 6000 }
}))
app.use(flash())
app.use(methodOverride("_method"))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/buku', bukuRouter)
app.use('/anggota', anggotaRouter)

app.use((req, res, next)=>{
  res.locals.moment = moment;
  next();
});

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
