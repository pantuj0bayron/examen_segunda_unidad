const { dialect } = require('../config/db.config');
const { Pool } = require('../config/db.config');
const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
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
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
        
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.alumnos = require('./alumnos.models.js')(sequelize, Sequelize);
console.log("¿El modelo alumnos tiene la función create?:", typeof db.alumnos.create === 'function')
const AlumnoModel = require('./alumnos.models.js');
db.alumnos = AlumnoModel(sequelize, Sequelize);
module.exports = db;

