const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: dbConfig.pool ? dbConfig.pool.max : 5, // Seguridad extra: si falla, usa 5
    min: dbConfig.pool ? dbConfig.pool.min : 0,
    acquire: dbConfig.pool ? dbConfig.pool.acquire : 30000,
    idle: dbConfig.pool ? dbConfig.pool.idle : 10000
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.alumnos = require("./alumnos.models.js")(sequelize, Sequelize);

module.exports = db;