const Router = require('@koa/router')
const router = new Router()

const lrProperty = require('./models/lrProperty.js')

router
  .get('/lrProperty', async ctx => {
    const response = await new lrProperty().fetchAll({
      columns: ['id', 'outcode', 'incode', 'street'],
      require: false
    })

    return (ctx.body = { success: true, data: response.toJSON() })
  })
  .get('id', '/lrProperty/id/:id', async ctx => {
    const id = ctx.params.id
    const response = await new lrProperty({
      id: id
    }).fetch({
      withRelated: ['lrTransactions'],
      require: false
    })

    if (!response) {
      ctx.status = 404
      return (ctx.body = { error: true, msg: 'LRProperty not found' })
    }

    const data = response.toJSON()

    return (ctx.body = { success: true, lrProperty: data })
  })
  .get('street', '/lrProperty/street/:street', async ctx => {
    const street = ctx.params.street.toUpperCase()
    const response = await new lrProperty().where({ street: street }).fetchAll({
      require: false,
      withRelated: ['lrTransactions']
    })

    if (!response.length) {
      ctx.status = 404
      return (ctx.body = { error: true, msg: 'LRProperty not found' })
    }

    const data = response.toJSON()

    return (ctx.body = { success: true, lrProperty: data })
  })
  .get('postcode', '/lrProperty/postcode/:outcode/:incode', async ctx => {
    const outcode = ctx.params.outcode.toUpperCase()
    const incode = ctx.params.incode.toUpperCase()
    const response = await new lrProperty()
      .where({ outcode: outcode, incode: incode })
      .fetchAll({
        withRelated: ['lrTransactions'],
        require: false
      })

    if (!response.length) {
      ctx.status = 404
      return (ctx.body = { error: true, msg: 'LRProperty not found' })
    }

    const data = response.toJSON()

    return (ctx.body = { success: true, lrProperty: data })
  })

module.exports = app => {
  app.use(router.routes()).use(router.allowedMethods())
}
