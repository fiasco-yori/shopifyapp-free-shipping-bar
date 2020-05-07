const Router = require('koa-router')
const router = new Router()
const FsbBackground = require('../models/FsbBackground')
router.post('/fsb/api/fsb_backgrounds', async ctx => {
    await FsbBackground.findAll()
            .then (datas => {
                ctx.body = datas
            })
            .catch(err => {
                ctx.body = 'error: ' + err
            })
})
module.exports = router