const Router = require('koa-router')
const router = new Router()
const Shop = require('../models/Shop')
const Fsb_bars = require('../models/FsbBar')

router.post('/fsb/api/fsb_bardatas', async ctx => {
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
    await Fsb_bars.findAll({
        where: {
            shop_id: shop_id
        }
    })
    .then (datas => {
        console.log(datas);
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
    console.log('---start fsb add')
    console.log(rbody)
    console.log(rbody.bar_id)

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
})

module.exports = router