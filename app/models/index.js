const Sequelize = require("sequelize");

// Sequelize puede recibir la URL directamente
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Necesario para la mayoría de servicios en la nube
    }
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Inicializa el modelo
db.alumnos = require('./alumnos.models.js')(sequelize, Sequelize);

module.exports = db;