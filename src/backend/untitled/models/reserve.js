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
        type: Array,
        required: false
    },

    timeBefore: {
        type: Array,
        required: false
    },
    timeAfter: {
        type: Array,
        required: false
    },
    phone:{
        type: Array,
        required: false
    },
    personCount:{
        type: Array,
        required: false
    }
});

exports.Reserve = promise.model('Reserve', schema);