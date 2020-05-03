const Router = require('koa-router')
const router = new Router()
const Fsb_template = require('../models/fsb_template')

router.post('/fsb/api/fsb_templates', async ctx => {
    await Fsb_template.findAll()
            .then (Fsb_templates => {
                console.log(Fsb_templates)
                ctx.body = Fsb_templates
            })
            .catch(err => {
                console.log(err);
                ctx.body = 'error: ' + err
            })
})

module.exports = router