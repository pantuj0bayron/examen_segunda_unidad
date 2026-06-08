const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
console.log("--- EL SERVIDOR HA INICIADO ---");
const db = require("./app/models");
b.sequelize.sync().then(() => {
  console.log("¡Conexión exitosa!");
}).catch(err => {
  console.error("Error de conexión:", err);
});
db.Sequelize.sync();
app.get("/", (req, res) => {
    res.json({ message: "mi primera base de datos en la nube" });
});
require("./app/routes/alumno.routes")(app);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`el servidor esta corriendo en el puerto ${PORT}.`);
});
