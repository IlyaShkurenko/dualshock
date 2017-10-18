let fs = require("fs");
let toFile = async(rooms) => {
    await writeInFile(JSON.stringify(rooms));
};

let writeInFile = async(str) => {
    console.log(str);
    fs.writeFile('rooms.json', str, (err) => {
        if (err) throw err;
    });
};

module.exports = {
    toFile
};