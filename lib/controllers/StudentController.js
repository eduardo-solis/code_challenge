
const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController {

    static getAllStudents() {

        const data = Reader.readJsonFile("visualpartners.json");
        const students = StudentService.getAllStudents(data);
        return students;

    }

    static getStudentsEmailsWithCertification () {

        const data = Reader.readJsonFile("visualpartners.json");
        const studentsemails = StudentService.getStudentsEmailWithCertification(data);
        return studentsemails;

    }

}

module.exports = StudentController;