const Express = require("express");

const app = Express();

const port = 3000;

app.use(Express.json());

app.get("/", (req, res) => {
    res.send("<h1>Student API welcome!!!</h1>");
});

app.listen(port, () => {
    console.log(`Student API in port: ${port}`);
});