const Router = require('koa-router')
const router = new Router()
const Shop = require('../models/Shop')
const Fsb_bars = require('../models/FsbBar')
const FsbBackground = require('../models/FsbBackground')
const FsbFont = require('../models/FsbFont')
const Fsb_template = require('../models/FsbTemplate')
const ShopifyAPIClient = require("shopify-api-node");

const fetch = require("node-fetch");

router.post('/fsb_get_bar/:shop', async ctx => {
    
    let shop_name = ctx.params.shop
    let shop_id = 0, getShop;
    var shop_currency = "USD";

    getShop = await Shop.findOne({
        where: {
            name: shop_name
        }
    })

    if(getShop.id) {
        shop_id = getShop.id
        const shopify = new ShopifyAPIClient({
            shopName: shop_name,
            accessToken: getShop.accessToken,
        });
        var shopdata = await shopify.shop.get()
        shop_currency = shopdata.currency
    }

    var cur_res = await fetch("http://api.openrates.io/latest?base="+shop_currency);
    var cur_json = await cur_res.json();
    await Fsb_bars.findOne({
        where: {
            shop_id: shop_id,
            is_active: 1
        }
    })
    .then (data => {
        
        var exchange_rate = 1;
        if(cur_json.rates) {
            var cur_json_obj = JSON.parse(JSON.stringify(cur_json.rates), function (key, value) {
                if (key == data.currency) {
                  exchange_rate = value
                  return value;
                } else {
                  return value;
                }
            });
        }
        let display_page = (data.display_page == 'all' || data.display_page == 'home') ? data.display_page : data.display_page == 'url' ? data.display_url : data.display_page == 'keyword' ? data.display_keyword: data.display_page;
        
        let exclude_page = (data.exclude_page == 'no' || data.exclude_page == 'home') ? data.exclude_page : data.exclude_page == 'url' ? data.exclude_url : data.exclude_page == 'keyword' ? data.exclude_keyword: data.exclude_page;

        let bar = {
            animation_time: data.time_fade,
            auto_currency: data.is_auto_cur == 'on' ? true : false,
            background_color: data.bg_color,
            background_pic: data.img,
            bar_height: 30,
            bar_id: data.id,
            bar_link: data.link_url,
            bar_padding: data.padding,
            close_option: data.is_close_btn == 'yes' ? true: false,
            countries: data.countries,
            currency_code: data.currency,
            currency_exchange_rate: exchange_rate,
            currency_symbol: data.cur_symbol,
            custom_code: data.custom_code,
            display_page: display_page,
            end_on: data.sch_end ? data.sch_end.replace('T', ' '): '',
            entire_bar_clickable: false,
            exclude_countries: "",
            exclude_page: exclude_page,
            font: data.font_family,
            font_size: data.font_size,
            goal: data.goal,
            goal_2: data.gaol_sec,
            interval_time: data.delay_before,
            locales: [],
            message_one: data.init_msg_start + " {{currency_symbol}}{{goal}}",
            message_three: data.goal_msg,
            message_two: data.progress_msg_start + " {{currency_symbol}}{{remainder}} " + data.progress_msg_end,
            message_two_2: data.progress_msg_sec_start + " {{currency_symbol}}{{remainder_2}} " + data.progress_msg_sec_end,
            new_tab: data.is_link_new == 1 ? true : false,
            opacity: 1,
            position: data.position,
            schedule_enabled: data.schedule == 'yes' ? true : false,
            show_time: data.disp_after,
            start_on: data.sch_start ? data.sch_start.replace('T', ' ') : '',
            target_device: data.dev_target,
            text_color_one: data.text_color,
            text_color_two: data.special_color,
            translation: "",
            visitor_currency_code: data.currency
        }
        let bars = []
        bars.push(bar)
        let send_data = {
            bars: bars,
            record: false,
            shop_active: "yes"
        }
        
        ctx.body = send_data
    })
    .catch(err => {
        console.log(err)
        ctx.body = []
    })
})

router.post('/fsb/api/fsb_bardatas', async ctx => {
    const {shop, accessToken} = ctx.session
    console.log('session:'+ accessToken)
    let shop_id = 0, getShop;
    getShop = await Shop.findOne({
        where: {
            name: shop
            //,accessToken: accessToken
        }
    })

    let get_backgrounds = await FsbBackground.findAll()
    let get_fonts = await FsbFont.findAll()
    let get_templates = await Fsb_template.findAll()
            
    if(getShop.id) {
        shop_id = getShop.id
    }
    await Fsb_bars.findAll({
        where: {
            shop_id: shop_id
        }
    })
    .then (datas => {
        ctx.body = {bar: datas, templates: get_templates, fonts: get_fonts, backgrounds: get_backgrounds}
    })
    .catch(err => {
        ctx.body = []
    })
})
router.post('/fsb/api/fsb_addbar', async ctx => {
    const {shop, accessToken} = ctx.session
    let shop_id = 0, getShop;
    getShop = await Shop.findOne({
        where: {
            name: shop,
            accessToken: accessToken
        }
    })
    if(getShop.id) {
        shop_id = getShop.id
    }

    
    let rbody = ctx.request.body.bar
    if(rbody.bar_id == 0){
        rbody.shop_id = shop_id
        let exist_bar_count = await Fsb_bars.count({
            where: {
                shop_id: shop_id
            }
        })
        if(exist_bar_count < 1) {
            rbody.is_active = 1
        }
        await Fsb_bars.create(rbody)
        .then(data => {
            ctx.body = {result:data, status:'success', err_msg: 'Bar Created Successfully!'}
        })
        .catch(err => {
            ctx.body = {status: 'fail', err_msg: err}
        })
    }else if(rbody.bar_id > 0) {
        let update_id = rbody.bar_id
        delete rbody.bar_id
        await Fsb_bars.update(
            rbody,
            {where: {id: update_id}}
        )
        .then (() => {
            ctx.body = {status: 'success', err_msg:'Bar Updated Successfully!'}
        })
        .catch(err => {
            ctx.body = {status: 'fail', err_msg: err}
        })
    }else {
        ctx.body = {status: 'fail'}
    }
})

router.post('/fsb/api/fsb_activate', async ctx => {
    let id = ctx.request.body.data.id
    let shop_id = ctx.request.body.data.shop_id
    if(!ctx.request.body.data.id) {
        ctx.body = {
            status: 'fail'
        }
    } else {
        let deactive;
        deactive = await Fsb_bars.update(
            {is_active: 0},
            {where: {is_active: 1, shop_id: shop_id}  }
        )
        .then ((data) => {
            return data
        })
        .catch(err => {
            return err
        })
        await Fsb_bars.update(
            {is_active: 1},
            {where: {id: id}}
        )
        .then (() => {
            console.log('updated bar')
            ctx.body = {status: 'success'}
        })
        .catch(err => {
            ctx.body = {status: 'fail'}
        })
    }
})
router.post('/fsb/api/fsb_pause', async ctx => {
    let id = ctx.request.body.data.id
    await Fsb_bars.update(
            {is_active: 0},
            {where: {id: id}}
        )
        .then (() => {
            console.log('paused bar')
            ctx.body = {status: 'success'}
        })
        .catch(err => {
            ctx.body = {status: 'fail'}
        })
    }
)
router.post('/fsb/api/fsb_duplicatebar', async ctx => {
    getBarbyid = await Fsb_bars.findOne({
        where: {
            id: ctx.request.body.id
        }
    })
    
    if(getBarbyid) {
        let insertData = {
            shop_id: getBarbyid.shop_id,
            template_id: getBarbyid.template_id,
            background_id: getBarbyid.background_id,
            name: getBarbyid.name,
            goal: getBarbyid.goal,
            goal_sec: getBarbyid.goal_sec,
            init_msg_start: getBarbyid.init_msg_start,
            init_msg_end: getBarbyid.init_msg_start, 
            progress_msg_start: getBarbyid.progress_msg_start,
            progress_msg_end: getBarbyid.progress_msg_end,
            progress_msg_sec_start: getBarbyid.progress_msg_sec_start,
            progress_msg_sec_end: getBarbyid.progress_msg_sec_end,
            goal_msg: getBarbyid.goal_msg, 
            link_opt: getBarbyid.link_opt, 
            link_url: getBarbyid.link_url,
            is_link_new: getBarbyid.is_link_new,
            is_close_btn: getBarbyid.is_close_btn,
            position: getBarbyid.position, 
            currency: getBarbyid.currency,
            cur_symbol: getBarbyid.cur_symbol,
            is_auto_cur: getBarbyid.is_auto_cur,
            bg_color: getBarbyid.bg_color,
            text_color: getBarbyid.text_color,
            special_color: getBarbyid.special_color, 
            bg_color_opacity: getBarbyid.bg_color_opacity,
            font_size: getBarbyid.font_size,
            font_family: getBarbyid.font_family,
            padding: getBarbyid.padding,
            disp_after: getBarbyid.disp_after,
            delay_before: getBarbyid.delay_before,
            time_fade: getBarbyid.time_fade,
            display_page: getBarbyid.display_page,
            exclude_page: getBarbyid.exclude_page,
            dev_target: getBarbyid.dev_target,
            schedule: getBarbyid.schedule,
            custom_code: getBarbyid.custom_code,
            display_url: getBarbyid.display_url,
            display_keyword: getBarbyid.display_keyword,
            exclude_url: getBarbyid.exclude_url,
            exclude_exclude_keyword: getBarbyid.exclude_keyword,
            sch_start: getBarbyid.sch_start,
            sch_end: getBarbyid.sch_end,
            img: getBarbyid.img
        }
        await Fsb_bars.create(insertData)
        .then(() => {
            ctx.body = {status: 'success'}
        })
        .catch(err => {
            ctx.body = {status: 'fail'}
        })
    }else {
        ctx.body = {status: 'fail'}
    }
    
})
router.post('/fsb/api/fsb_deletebar', async ctx => {
    await Fsb_bars.destroy({
        where: {
            id: ctx.request.body.id
        }
    })
    .then(() => {
        ctx.body = {status: 'success'}
    })
    .catch(err => {
        ctx.body = {status: 'fail'}
    })
})

module.exports = router