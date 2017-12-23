let Hookahs = [];
let fs = require("fs");
var Hookah = require('../models/hookah').Hookah;

let remove = async(index) => {
    Hookah.find({ id:index }).remove().exec()

};
let create = async(HookahTodb) => {
    console.log('Hookah = ' + HookahTodb.img)
    console.log('Hookah id = ' + HookahTodb.id)
    let hookah = new Hookah(HookahTodb);
    hookah.save(function (err, hk, affected) {
        if (err) throw err;
    })

};
let getById = async(index) =>{
    let isThere = {}
    await Hookah.findOne({id: index}, function (err, Hookah) {
        isThere = Hookah
    });
    return isThere
}
let getAll = async() => {
    let count = 0;
    let HookahMap = {};
    await Hookah.find({},function(err, Hookahs) {

        Hookahs.forEach(function(Hookah) {
            HookahMap[count] = Hookah;
            count++;
        });
    });
    return HookahMap
};

module.exports = {
    remove,
    create,
    getAll,
    getById
};