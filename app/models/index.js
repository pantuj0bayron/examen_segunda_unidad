const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Sequelize recibe la URL directamente como primer argumento
const sequelize = new Sequelize(dbConfig.url, {
    dialect: dbConfig.dialect,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Inicializa el modelo una sola vez
db.alumnos = require("./alumnos.models.js")(sequelize, Sequelize);

module.exports = db;