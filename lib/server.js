const Express = require("express");
const StudentController = require("./controllers/StudentController");

const app = Express();

const port = 3000;

app.use(Express.json());

app.get("/", (req, res) => {
    res.send("<h1>Student API welcome!!!</h1>");
});

app.get("/v1/students", (req, res) => {

    const students = StudentController.getAllStudents();
    res.json(students);

});

app.get("/v1/students/emails", (req, res) => {

    const students = StudentController.getStudentsEmailsWithCertification();
    res.json(students);

});

app.listen(port, () => {
    console.log(`Student API in port: ${port}`);
});