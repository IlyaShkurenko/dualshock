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
var tournament = require('./routes/tournament');
var event = require('./routes/event');
var reserve = require('./routes/reserve');
var router = express.Router();
var app = express();
var config = require('./config/index');
var mongoose = require('mongoose');
var cors = require('cors');
var hookah = require('./routes/hookah')
var rate = require('./routes/rates')
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');
var Reserve = require('./models/reserve').Reserve;
require('dotenv').config();
var connect = require('connect');
const PORT = process.env.PORT || 5000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
var date = new Date();
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
app.use('/hookah',hookah);
app.use(users);
app.use('/reserve',reserve);
app.use('/rate',rate);
app.use('/event',event);
app.use('/tournament',tournament);
app.use('/diagram',function (req,res) {
    res.sendFile('views/diagram.html', {root: __dirname })
})
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
function intervalFunc() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    if( hour == '02'){
     if(clear()){
       console.log('removed')
     }
    }
}
let clear = async() =>{
    await Reserve.remove({}, function (err, removed) {
        if(err) return false
    })
    return true
};
setInterval(intervalFunc, 60000);
/*var accountSid = 'AC3f3b0e94d8ce6c442973ad53bc4dc7d6';
var authToken = '1d134eea93b37cedd1c9b347d13ffec3';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "+380686897387",
    from: "+12564948790",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
}, function(err, message) {
    console.log(message);
});*/
const client = require('twilio')(
    'AC3f3b0e94d8ce6c442973ad53bc4dc7d6',
    '1d134eea93b37cedd1c9b347d13ffec3'
);

/*client.messages.create({
    from: "+12564948790",
    to: "380686897387",
    body: "You just sent an SMS from Node.js using Twilio!"
}).then((messsage) => console.log(message.sid));*/
/*if (true) {
    client.messages.create({
        to: "+380982023282",
        from: "+12564948790",
        body: "Ты пидор"
    }, function(err, message) {
        if(err){
            console.log(err);
        } else {
            console.log(message.sid);
        }
    });
    console.log('lol');
} else {
    console.log('hey');
}*/
/*const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: 'a509a26f',
    apiSecret: 'aef758cfbb11a7e3'
});
nexmo.message.sendSms(
    '12564948790', '380686897387', 'yo',
    (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            console.dir(responseData);
        }
    }
);*/
http.createServer(app).listen(PORT, () =>{
  console.log("Server is listening on port: " +PORT)
});
module.exports = function (bot) {
    app.post('/' + bot.token, function (req, res) {
        bot.processUpdate(req.body);
        res.sendStatus(200);
    });
};