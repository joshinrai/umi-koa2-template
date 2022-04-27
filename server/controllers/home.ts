module.exports = (router: any) => {
  router.get('/', async (ctx: any) => {
    ctx.body = {
      data: {
        items: [],
        msg: '首页测试数据....',
      },
      code: 200,
    };
  })
}
