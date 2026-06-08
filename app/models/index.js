const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true, // Esto es lo que Neon está pidiendo
      rejectUnauthorized: false // Necesario para evitar errores de certificados en Render
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize; // ESTA ES LA LÍNEA CRÍTICA

// Importa tus modelos
db.alumnos = require("./alumno.models.js")(sequelize, Sequelize);

module.exports = db;