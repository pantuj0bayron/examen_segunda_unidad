const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos
const db = require("./app/models");

// Sincronización con la base de datos
db.sequelize.sync().then(() => {
  console.log("¡Conexión exitosa a la base de datos!");
}).catch(err => {
  console.error("Error de conexión:", err);
});

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({ message: "Servidor corriendo correctamente en la nube" });
});

// Importar rutas
require("./app/routes/alumno.routes")(app);

// Puerto
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}.`);
});