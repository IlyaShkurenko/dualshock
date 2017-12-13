var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var remove = require('./routes/delete');
var users = require('./routes/users');
var rooms = require('./routes/rooms');
var index = require('./routes/index');
var event = require('./routes/event');
var reserve = require('./routes/reserve');
var router = express.Router();
var app = express();
var config = require('./config/index');
var mongoose = require('mongoose');
var cors = require('cors');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');
require('dotenv').config();
var connect = require('connect');
const PORT = process.env.PORT || 5000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(history());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes')));
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use('/rooms',rooms);
app.use('/delete',remove);
app.use(users);
app.use('/reserve',reserve);
app.use('/event',event);
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
http.createServer(app).listen(PORT, () =>{
  console.log("Server is listening on port: " +PORT)
});
