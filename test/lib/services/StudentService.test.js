
const Reader = require("../../../lib/utils/Reader");
const StudentService = require("../../../lib/services/StudentService");

describe("Unit Test for StudentService class", () => {

    test("Test 1.- Get the information about all students", () => {

        const data = Reader.readJsonFile("visualpartners.json");
        const students = StudentService.getAllStudents(data);
        expect(students).not.toHaveLength(0);

    });
    
});
