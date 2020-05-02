const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'shops',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        accessToken: {
            type: Sequelize.STRING
        }
    }
)