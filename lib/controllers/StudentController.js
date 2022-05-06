
const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController {

    static getAllStudents() {

        const data = Reader.readJsonFile("visualpartners.json");
        const students = StudentService.getAllStudents(data);
        return students;

    }

}

module.exports = StudentController;