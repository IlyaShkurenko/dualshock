var crypto = require('crypto');

var mongoose = require('../node_modules/mongoose');

var promise = require('../libs/mongoose');

var schema = mongoose.Schema({
    number:{
        type: Number,
        unique: true,
        required: false

    },
    name: {
        type: String,
        required: false
    },

    money: {
        type: Number,
        required: false
    },
    status: {
        type: Boolean,
        required: false,
        default: false
    }
});

exports.Rate = promise.model('Rate', schema);