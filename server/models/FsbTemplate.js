const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'fsb_template',
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
        bg_color: {
            type: Sequelize.STRING
        },
        text_color: {
            type:Sequelize.STRING
        },
        special_color: {
            type:Sequelize.STRING
        },
        type:{
            type:Sequelize.TINYINT
        },
        font_size:{
            type:Sequelize.INTEGER
        },
        font_family:{
            type:Sequelize.STRING
        }
    }
)