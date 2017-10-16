var User = require('./models/user').User;

var mongoose = require('mongoose');

mongoose.set('debug',true);

var async = require('async');
async.series([
    open,
    dropDatabase,
    createUsers(),
    close()
]);
/*series([
    open,
    dropDatabase,
    createUsers,
    close
],function (err) {
    console.log(arguments);
});*/
function open(callback) {
    mongoose.connection.on('open',callback);
}

function dropDatabase(callback) {
    console.log('lol2');
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function createUsers(callback) {
    var users = [
        {username: 'Illia', password: 'firaxis'},
        {username: 'Dima', password: 'firaxis1998'},
        {username: 'Vlad', password: 'firaxisfiraxis'},
    ];

    async.each(users, function (userData, callback) {
        var user = new User(userData);
        console.log(user);
        user.save(callback);
    }, callback);
}

function close(callback) {
    mongoose.disconnect(callback);
}
/*var user = User({
  username: "Tester3",
  password: "secret"
});

user.save(function (err, user, affected) {
   if (err) throw err;
   User.findOne({
       username: "Tester"
   }, function (err, tester) {
       console.log(tester);
   })
});*/