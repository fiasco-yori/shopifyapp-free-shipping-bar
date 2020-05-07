const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'fsb_bars',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        shop_id: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
        goal: {
            type: Sequelize.FLOAT
        },
        init_msg_start: {
            type: Sequelize.STRING
        },
        init_msg_end: {
            type: Sequelize.STRING
        },
        progress_msg_start: {
            type: Sequelize.STRING
        },
        progress_msg_end: {
            type: Sequelize.STRING
        },
        goal_msg: {
            type: Sequelize.STRING
        },
        link_opt: {
            type: Sequelize.STRING
        },
        link_url: {
            type: Sequelize.STRING
        },
        is_link_new: {
            type: Sequelize.TINYINT
        },
        is_close_btn: {
            type: Sequelize.STRING
        },
        position: {
            type: Sequelize.STRING
        },
        currency: {
            type: Sequelize.STRING
        },
        cur_symbol: {
            type: Sequelize.STRING
        },
        is_auto_cur: {
            type: Sequelize.STRING
        },
        bg_color: {
            type: Sequelize.STRING
        },
        text_color: {
            type: Sequelize.STRING
        },
        special_color: {
            type: Sequelize.STRING
        },
        bg_color_opacity: {
            type: Sequelize.FLOAT
        },
        font_size: {
            type: Sequelize.INTEGER
        },
        padding: {
            type: Sequelize.INTEGER
        },
        disp_after: {
            type: Sequelize.INTEGER
        },
        delay_before: {
            type: Sequelize.INTEGER
        },
        time_fade: {
            type: Sequelize.INTEGER
        },
        display_page: {
            type: Sequelize.STRING
        },
        display_url: {
            type: Sequelize.STRING
        },
        display_keyword: {
            type: Sequelize.STRING
        },
        exclude_keyword: {
            type: Sequelize.STRING
        },
        exclude_url: {
            type: Sequelize.STRING
        },
        dev_target: {
            type: Sequelize.STRING
        },
        schedule: {
            type: Sequelize.STRING
        },
        sch_start: {
            type: Sequelize.STRING
        },
        sch_end: {
            type: Sequelize.STRING
        },
        custom_code: {
            type: Sequelize.TEXT
        },
        template_id: {
            type: Sequelize.INTEGER
        },
        background_id: {
            type: Sequelize.INTEGER
        },
        is_active: {
            type: Sequelize.TINYINT
        },
        shop_id: {
            type: Sequelize.INTEGER
        },
        countries: {
            type: Sequelize.STRING
        },
        exclude_countries: {
            type: Sequelize.STRING
        },
    }
)