var crypto = require('crypto');

var mongoose = require('../node_modules/mongoose');

var promise = require('../libs/mongoose');

var schema = mongoose.Schema({
   id:{
       type: Number,
       unique: true,
       required: false

   },
   type: {
       type: String,
       required: false
   },

   games: {
       type: Array,
       required: false
   },
   price:{
       type: String,
       required: false
   },
   capacity:{
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

exports.Room = promise.model('Room', schema);