/*var db = require('db/database');
var log = require('./logger')(module);
db.connect();
var User = require('./user/user');
function run() {
    var vasya = new User("vasya");
    var illia = new User("illia");
    vasya.hello(illia)
    log(db.getPhrase("Successful"));
}
if(module.parent){
    exports.run = run;
}
else run();*/
/*var util = require('util');
var db = require('db/ru')

var PhraseError = function(message){
    this.message = message;
    Error.captureStackTrace(this,PhraseError);
};
PhraseError.prototype.name = "PhraseError";
util.inherits(PhraseError,Error);
var HttpError = function(status,message){
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this,HttpError);
};
HttpError.prototype.name = "HttpError";
util.inherits(HttpError,Error);
var getPhrase = function (name) {
    if(!db[name]){
        throw new PhraseError("Phrase not found "+name);
    }
    else return db[name];
};

var getUrl = function (url) {
    if(url !== 'index.html'){
        throw new HttpError(404,"Http error");
    }
    else return util.format("%s, %s",getPhrase("Hello"), getPhrase("Successful"));
};
try {
 var page = getUrl('index.html')
    console.log(page);
}catch (e){
    if(e instanceof HttpError){
        console.log(e.status + " " +e.message + " " +e.stack)
    }
    else {
        console.error("Error "+e.name + " " + e.message + " "+e.stack);
    }
}*/
/*var http = require('http');

var url = require('url');
var server = new http.Server(function (req,res) {
    var parse = url.parse(req.url, true);
    if(parse.pathname === '/echo' && parse.query.message){
        res.statusCode = 200;
        res.end(parse.query.message);
      //  server.close();
    }
    else {
        res.statusCode = 404;
        res.end('<bold>Not found</bold>');
       // server.close();
    }
});

server.listen(8080,'127.0.0.1');*/
/*console.log("lol")
var MongoClient = require('./node_modules/mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/untitled';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
   var collection = db.collection('test_insert');
   collection.insert({a:2},function (err, docs) {
    collection.count(function (err,count) {
        console.log(count);
    });
       collection.find().toArray(function (mongoError,results) {
           console.dir(results);
           db.close();
   });
   });
});*/
var mongoose = require('./node_modules/mongoose');
var promise = require('./libs/mongoose');
var schema = mongoose.Schema({
    name: String
});
schema.methods.meuw = function () {
    console.log(this.get('name'))
};
var Cat = promise.model('Cat', schema);

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err,kitty,affected) {
  kitty.meuw();
});
