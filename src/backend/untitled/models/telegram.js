var crypto = require('crypto');

var mongoose = require('../node_modules/mongoose');

var promise = require('../libs/mongoose');

var schema = mongoose.Schema({
    account: {
        type: String,
        required: false
    },
    listen:{
        type: Boolean,
        required: false,
        default: false
    }
});

exports.Telegram = promise.model('Telegram', schema);