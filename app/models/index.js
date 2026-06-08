const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Sequelize puede usar la URL directamente
const sequelize = new Sequelize(dbConfig.url, {
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.alumnos = require("./alumnos.models.js")(sequelize, Sequelize);

module.exports = db;