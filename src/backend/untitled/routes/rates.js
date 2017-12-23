var express = require('express');
var router = express.Router();
let ref = require('../modules/ratesRefuge')
var Rate = require('../models/rates').Rate;
var formidable = require('formidable');
router.post('/', async (req, res) => {
    let newRate = {
        number: Number,
        name: String,
        status: Boolean,
        money:Number
    };
    let array = [];
    let index = -1;
    let id;
    let save = [];
    let match;
    let result = req.body.key;
    console.log(result.number)
   //console.log(result)
    for(let name in result){
        console.log(name, result[name])
        if(name === 'number'){
            newRate.number = parseInt(result[name]);
        }
        else if(name === 'money'){
            newRate.money = parseInt(result[name])
        }
        else {
            newRate[name] = result[name]
        }
    }
    await ref.create(newRate)
    res.end()

});
router.post('/update', async (req, res) => {
    let newRate = {
        number: Number,
        name: String,
        status: Boolean,
        money:Number
    };
    let array = [];
    let index = -1;
    let id;
    let save = [];
    let match;
    let result = req.body;
    let player = result.player;
    await Rate.findOne({name: player}, function (err, rate) {
        rate.status = true;
        rate.save(function (err, updatedTank) {
            if (err) throw err;
            res.json(updatedTank);
        });
    });
   //console.log(result)

});
router.get('/',async function (req, res, next) {
    var reservMap = {};
    await Rate.find({}, function(err, places) {

        places.forEach(function(place) {
            reservMap[place._id] = place;
        });
        res.json(reservMap);
    });
});
module.exports = router;