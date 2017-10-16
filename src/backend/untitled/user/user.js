var User;
var ru = require('db/database');
var log = require('../logger')(module);
User = function(name) {
    this.name = name;
};

User.prototype.hello = function (who) {
  log(ru.getPhrase("Hello") +", " + who.name);
};
console.log("user.js is required");
module.exports = User;