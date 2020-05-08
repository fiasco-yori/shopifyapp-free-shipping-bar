const Router = require('koa-router')
const router = new Router()
const Shop = require('../models/Shop')
const Fsb_bars = require('../models/FsbBar')

router.post('/fsb/api/fsb_bardatas', async ctx => {
    const {shop, accessToken} = ctx.session
    console.log('token:' + accessToken)
    let shop_id = 0, getShop;
    getShop = await Shop.findOne({
        where: {
            name: shop
            //,accessToken: accessToken
        }
    })
    if(getShop.id) {
        shop_id = getShop.id
    }
    await Fsb_bars.findAll({
        where: {
            shop_id: shop_id
        }
    })
    .then (datas => {
        ctx.body = datas
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
        await Fsb_bars.create(rbody)
        .then(data => {
            console.log('created bar')
            ctx.body = data
        })
        .catch(err => {
            console.log(err)
            ctx.body = 'error: ' + err
        })
    }else if(rbody.bar_id > 0) {
        await Fsb_bars.update(
            {rbody},
            {where: {id: rbody.bar_id}}
        )
        .then (() => {
            console.log('updated bar')
            ctx.body = {status: 'bar updated!'}
        })
        .catch(err => {
            ctx.body = 'error: ' + err
        })
    }else {
        ctx.body = 'error'
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
            name: getBarbyid.name,
            goal: getBarbyid.goal,
            goal_two: getBarbyid.goal_two,
            init_msg_start: getBarbyid.init_msg_start,
            init_msg_end: getBarbyid.init_msg_start, 
            progress_msg_start: getBarbyid.progress_msg_start,
            progress_msg_end: getBarbyid.progress_msg_end,
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