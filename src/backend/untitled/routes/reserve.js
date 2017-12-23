var express = require('express');
var router = express.Router();
let reserve = require('../modules/reserveRefuge')
var Reserve = require('../models/reserve').Reserve;
let notAuthorised = {
    status: 401,
    message: 'Not Authorized'
}
let forbidden = {
    status: 403,
    message: 'Forbidden'
}
let notFound = {
    status: 404,
    message: 'Incorrect id'
}
router.post('/', async (req, res, next) => {
    let number = req.body.number;
    let place = {
        timeBefore:[],
        timeAfter:[],
        name: [],
        personCount: [],
        number: number,
        phone:[]
    };

    for(let prop in place){
        place[prop][0] = req.body[prop];
    }
    console.log(req.body)
        await reserve.create(place)
    //await console.log(reserve.getAll());
    res.end('success')
});
router.get('/',async function (req, res, next) {
    var reservMap = {};
    await Reserve.find({}, function(err, places) {

        places.forEach(function(place) {
            reservMap[place._id] = place;
        });
        res.json(reservMap);
    });
    /*let places = await reserve.getAll();
    console.log(places)
    res.json(places);
    res.end();*/
});
router.post('/remove/',async function (req, res, next) {
    let number = req.body.number;
    let place = {
        timeBefore:'',
        timeAfter:'',
        personCount: '',
        name: '',
        number: number,
        phone:''
    };

    for(let prop in place){
        place[prop] = req.body[prop];
    }
    await Reserve.findOne({number: place.number}, async function(err, pl) {
        let index = pl.timeBefore.indexOf(place.timeBefore)
        for(let prop in pl){
            if(place.hasOwnProperty(prop) && prop !== 'number'){
                pl[prop].splice(index, 1);
            }
// remove object

        }
        await pl.save(function (err, updatedTank) {
            if (err) throw err;
            res.end()
        });
    });
    //res.end()

   /* console.log(req.params.id)
    let room = await reserve.getById(req.params.id);
    if (room) {
        await reserve.remove(req.params.id);
        res.send("Deleted");
    }
    else {
        res.json(notFound)
    }*/

});
module.exports = router