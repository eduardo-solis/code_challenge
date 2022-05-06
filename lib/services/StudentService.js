
class StudentService {

    static getAllStudents (data) {

        return data;

    }

    static getStudentsEmailWithCertification (data) {

        const studentsWithCertification = data.filter( student => student.haveCertification );
        const studentsEmails = studentsWithCertification.map( student => student.email );

        return studentsEmails;

    }

    static getStudentsWithMoreCredits (data) {

        const studentsWithMoreCredits = data.filter( student => student.credits > 500 );
        return studentsWithMoreCredits;

    }

}

module.exports = StudentService;