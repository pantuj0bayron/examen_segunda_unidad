const { Pool } = require("pg")

module.exports = {
    HOST:process.env.DB_HOST,
    USER:process.env.DB_USER,
    PASSWORD:process.env.DB_PASSWORD,
    DB:process.env.DB_NAME,
    dialect:"postgresql",
    Pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }

}