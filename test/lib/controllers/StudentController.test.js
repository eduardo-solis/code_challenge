
const StudentController = require("../../../lib/controllers/StudentController");

describe("Unit Test for StudentController class", () => {

    test("Test 1.- Get all students", () => {

        const students = StudentController.getAllStudents();
        expect(students).not.toHaveLength(0);

    });

    test("Test 2.- Get student's emails with certification", () => {

        const studentsEmailsWithCertification = StudentController.getStudentsEmailsWithCertification();
        expect(studentsEmailsWithCertification).not.toHaveLength(0);

    });

});
