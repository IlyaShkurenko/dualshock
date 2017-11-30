var express = require('express');
var router = express.Router();
let reserve = require('../modules/reserveRefuge')
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
module.exports = router;