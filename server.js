const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.Sequelize.sync();
app.get("/", (req, res) => {
    res.json({ message: "mi primera base de datos en la nube" });
});
require("./app/routes/alumno.routes")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`el setvidor esta corriendo en el puerto${PORT}.`);
});
