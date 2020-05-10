const Router = require('koa-router')
const router = new Router()
const Fsb_template = require('../models/FsbTemplate')
const Cookie = require('js-cookie');

router.post('/fsb/api/fsb_templates', async ctx => {
    await Fsb_template.findAll()
            .then (Fsb_templates => {
                ctx.body = Fsb_templates
            })
            .catch(err => {
                ctx.body = 'error: ' + err
            })
})

module.exports = router