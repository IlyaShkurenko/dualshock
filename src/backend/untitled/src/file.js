let fs = require("fs");
let toFile = (rooms) => {
    writeInFile(JSON.stringify(rooms));
};

let writeInFile = (str) => {
    fs.writeFile('rooms.json', str, (err) => {
        if (err) throw err;
    });
};

module.exports = {
    toFile
};