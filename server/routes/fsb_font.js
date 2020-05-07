const Router = require('koa-router')
const router = new Router()
const FsbFont = require('../models/FsbFont')
router.post('/fsb/api/fsb_fonts', async ctx => {
    await FsbFont.findAll()
            .then (datas => {
                ctx.body = datas
            })
            .catch(err => {
                ctx.body = 'error: ' + err
            })
})
module.exports = router