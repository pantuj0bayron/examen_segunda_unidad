const { Pool } = require("pg")

module.exports = {
  url: process.env.DATABASE_URL,
  dialect: "postgres"
};
