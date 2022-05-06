
const fs = require("fs");

class Reader {

    static readJsonFile (path) {

        let data = fs.readFileSync(path);
        let dataJson = JSON.parse(data);
        return dataJson

    }
}

module.exports = Reader;
