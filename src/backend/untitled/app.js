var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var index = require('./routes/index');
var users = require('./routes/users');
var rooms = require('./routes/rooms');
var router = express.Router();
var app = express();
var config = require('config');
var mongoose = require('mongoose');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
let port = 5000;
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
var MongoStore = require('connect-mongo')(session);
/*app.use(session({
  secret: config.get('session:secret'),
  key: config.get('session:key'),
  cookie: config.get('session:cookie'),
  store: new MongoStore({
      host: '127.0.0.1',
      port: '27017',
      db: 'session',
      url: config.get('mongoose:uri')
  })
}));
app.use(function (req,res, next) {
   req.session.numberOfVisits = req.session.numberOfVisits +1 || 1;
   res.send("Visits " + req.session.numberOfVisits);
});*/
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes')));
app.use('/rooms',rooms);
//app.use('/image',users);

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
http.createServer(app).listen(port, () =>{
  console.log("Server is listening on port: " +port)
});
