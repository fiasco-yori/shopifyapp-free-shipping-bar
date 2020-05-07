const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'fsb_backgrounds',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        img: {
            type: Sequelize.STRING
        },
        text_color: {
            type: Sequelize.STRING
        },
        special_color: {
            type: Sequelize.STRING
        },
        font_family: {
            type: Sequelize.STRING
        },
        font_size: {
            type: Sequelize.INTEGER
        },
    }
)