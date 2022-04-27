const User = require('../services/user');

module.exports = (router: any) => {
  router.get('/userInfo', async (ctx: any) => {
    ctx.body = { test: 'userInfo ...' }
  })

  router.get('/auth', async (ctx: any) => {
    const user = new User(ctx);
    ctx.body = await user.auth({});
  });
  
  router.get('/info', async (ctx: any) => {
    const user = new User(ctx);
    ctx.body = await user.test(ctx?.query);
  });
}