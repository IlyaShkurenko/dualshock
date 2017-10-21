let fs = require("fs");
let toFile = (rooms) => {
    writeInFile(JSON.stringify(rooms));
};

let writeInFile = (str) => {
    console.log(str);
    fs.writeFile('rooms.json', str, (err) => {
        if (err) throw err;
    });
};

module.exports = {
    toFile
};