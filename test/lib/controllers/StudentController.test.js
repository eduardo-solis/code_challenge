
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

    test("Test 3.- Get student with credits highest to 500", () => {

        const studentsWithMoreCredits = StudentController.getStudentsWithMoreCredits();
        expect(studentsWithMoreCredits).not.toHaveLength(0);

    });

});
