
class StudentService {

    static getAllStudents (data) {

        return data;

    }

    static getStudentsEmailWithCertification (data) {

        const studentsWithCertification = data.filter( student => student.haveCertification );
        const studentsEmails = studentsWithCertification.map( student => student.email );

        return studentsEmails;

    }

}

module.exports = StudentService;