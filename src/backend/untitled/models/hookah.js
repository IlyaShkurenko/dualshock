var crypto = require('crypto');

var mongoose = require('../node_modules/mongoose');

var promise = require('../libs/mongoose');

var schema = mongoose.Schema({
    id:{
        type: Number,
        unique: true,
        required: true,
        default: 0

    },
    type: {
        type: String,
        required: false
    },
    price:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    img: {
        type:String,
        required: false
    }
});

exports.Hookah = promise.model('Hookah', schema);