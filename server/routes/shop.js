const Router = require('koa-router')
const router = new Router()
const Shop = require('../models/shop')

router.post('/fsb/api/shops', async ctx => {
    await Shop.findAll()
            .then (shops => {
                ctx.body = shops
            })
            .catch(err => {
                ctx.body = 'error: ' + err
            })
})

router.post('/fsb/api/shop/:id', async ctx => {
    await Shop.findOne({
        where: {
            id: ctx.params.id
        }
    })
    .then(shop => {
        if(shop) {
            ctx.body = shop
        }else {

        }
    })
    .catch(err => {
        ctx.body = 'error:' + err
    })
})

router.post('/fsb/api/shop', async ctx => {
    if(!ctx.request.body.name) {
        ctx.body = {
            error: 'Try again'
        }
    } else {
        await Shop.create(ctx.request.body)
                  .then(data => {
                      ctx.body = data
                  })
                  .catch(err => {
                      ctx.body = 'error: ' + err
                  })
    }
})

router.delete('/fsb/api/shop/:id', async ctx => {
    await Shop.destroy({
        where: {
            id: ctx.params.id
        }
    })
            .then (() => {
                ctx.body = {status: 'Shop Deleted'}
            })
            .catch(err => {
                ctx.body = 'error: ' + err
            })
})

router.put('/fsb/api/shop/:id', async ctx => {
    if(!ctx.request.body.name){
        ctx.body = {
            error: 'bad data'
        }
    }else {
        await Shop.update(
            {name: ctx.request.body.name},
            {where: {id: ctx.params.id}}
        )
        .then (() => {
            ctx.body = {status: 'Shop updated!'}
        })
        .catch(err => {
            ctx.body = 'error: ' + err
        })
    }
    
})

module.exports = router