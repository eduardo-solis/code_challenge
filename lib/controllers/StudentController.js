
const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController {

    static getAllStudents() {

        const data = Reader.readJsonFile("visualpartners.json");
        const students = StudentService.getAllStudents(data);
        return students;

    }

    static getStudentsEmailsWithCertification () {

        const data = this.getAllStudents();
        const studentsemails = StudentService.getStudentsEmailWithCertification(data);
        return studentsemails;

    }

    static getStudentsWithMoreCredits () {

        const data = this.getAllStudents();
        const studentsWithMoreCredits = StudentService.getStudentsWithMoreCredits(data);
        return studentsWithMoreCredits;

    }

}

module.exports = StudentController;