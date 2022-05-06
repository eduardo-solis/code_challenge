
const Reader = require("../../../lib/utils/Reader");

describe("Unit Test for Reader class", () => {

    test("Get the information from file in json format", () => {

        const data = Reader.readJsonFile("visualpartners.json");
        expect(data).not.toHaveLength(0);

    });

});