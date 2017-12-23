let Rates = [];
let fs = require("fs");
var Rate = require('../models/rates').Rate;

let remove = async(index) => {
    Rate.find({ id:index }).remove().exec()

};
let create = async(RateTodb) => {
    let rate = new Rate(RateTodb);
    rate.save(function (err, hk, affected) {
        if (err) throw err;
    })

};
let getById = async(index) =>{
    let isThere = {}
    await Rate.findOne({id: index}, function (err, rate) {
        isThere = rate
    });
    return isThere
}
let getAll = async() => {
    let count = 0;
    let RateMap = {};
    await Rate.find({},function(err, Rates) {

        Rates.forEach(function(Rate) {
            RateMap[count] = Rate;
            count++;
        });
    });
    return RateMap
};

module.exports = {
    remove,
    create,
    getAll,
    getById
};