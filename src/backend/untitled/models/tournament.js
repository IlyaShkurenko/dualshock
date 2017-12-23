var crypto = require('crypto');

var mongoose = require('../node_modules/mongoose');

var promise = require('../libs/mongoose');

var schema = mongoose.Schema({
    id:{
        type: Number,
        unique: true,
        required: false,
        default: -1

    },
    players:{
        type: Array,
        required: true
    },
    status:{
      type: Boolean,
      required: false,
      default: false
    }
});

exports.Tournament = promise.model('Tournament', schema);