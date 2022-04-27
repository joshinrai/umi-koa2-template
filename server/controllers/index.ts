// 文件未生效
const controllerConfig = require('../lib/config')

const serverRender = async (ctx: any, data = {}) => {
  console.log(5555, 'ctx is:', ctx, data);
  const userAgent = ctx.header['user-agent']

  return ctx.render('index', {
    platform: ctx.clientInfo.platform,
    userAgent,
    ...data
  })
}

module.exports = (router: any) => {
  router
    .get('/', serverRender)
    .get('/*', async (ctx: any) => {
      console.log(9999, ctx);
      const data = {
        qs: JSON.stringify(ctx.query),
        timestamp: Date.now()
      }
      await serverRender(ctx, data);
    });
}
