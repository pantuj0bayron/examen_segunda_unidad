const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuración de CORS permitiendo todos los orígenes
// Esto evita errores cuando tu frontend se conecte desde fuera de localhost
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

// Sincronización de la base de datos
db.Sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "mi primera base de datos en la nube" });
});

// Rutas
require("./app/routes/alumnos.routes")(app);

// Configuración del puerto dinámica
// Render inyectará su propio puerto, si no existe usa 8081 por defecto
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}.`);
});

module.exports = app;