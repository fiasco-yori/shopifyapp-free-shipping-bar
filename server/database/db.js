require('dotenv').config({ path: '.env'})
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;
const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql',
    operatorsAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
} )

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db