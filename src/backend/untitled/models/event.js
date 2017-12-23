var crypto = require('crypto');

var mongoose = require('../node_modules/mongoose');

var promise = require('../libs/mongoose');

var schema = mongoose.Schema({
    id:{
        type: Number,
        unique: true,
        required: false,
        default: 1

    },
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    game:{
        type: String,
        required: false
    },
    max:{
        type: String,
        required: false
    },
    picking:{
        type: String,
        required: false
    },
    prize:{
        type: String,
        required: false
    },
    additional:{
        type: String,
        required: false
    },
    mod:{
        type: String,
        required: false
    },
    rules:{
        type: String,
        required: false
    },
    date:{
        type: String,
        required: false
    },
    participants:{
        type: Array,
        required: false
    },
    brackets:{
        type: Array,
        required: false
    },
    category:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required:false,
        default: false
    }
});

exports.Event = promise.model('Event', schema);