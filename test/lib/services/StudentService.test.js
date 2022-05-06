
const Reader = require("../../../lib/utils/Reader");
const StudentService = require("../../../lib/services/StudentService");

describe("Unit Test for StudentService class", () => {

    test("Test 1.- Get the information about all students", () => {

        const data = Reader.readJsonFile("visualpartners.json");
        const students = StudentService.getAllStudents(data);
        expect(students).not.toHaveLength(0);

    });

    test("Test 2.- Get student's emails with certification", () => {

        const data = Reader.readJsonFile("visualpartners.json");
        const studentsemails = StudentService.getStudentsEmailWithCertification(data);
        expect(studentsemails).not.toHaveLength(0);

    });

    test("Test 3.- Get student with credits highest to 500", () => {

        const data = Reader.readJsonFile("visualpartners.json");
        const studentsWithMoreCredits = StudentService.getStudentsWithMoreCredits(data);
        expect(studentsWithMoreCredits).not.toHaveLength(0);

    });

});
