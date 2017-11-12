var mongoose = require('mongoose');
var config = require('../config');
mongoose.Promise = global.Promise;
var promise = mongoose.createConnection(config.get('mongoose:uri'), {
    useMongoClient: true,
    /* other options */
});

module.exports = promise;