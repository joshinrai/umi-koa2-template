const SourceFileReader = require('../lib/readFiles');

module.exports = (router: any) => {
  router.get('/', async (ctx: any) => {
    // console.log(99999, ' icon is:', icon);
    console.log(77777, ' __dirname is:', __dirname);
    ctx.body = {
      data: {
        items: [],
        msg: '首页测试数据....',
      },
      code: 200,
    };
  }),
  router.get('/getFile', async (ctx: any) => {
    const query = ctx.query;
    const sourceFileReader = new SourceFileReader(`../assets/${query.path || 'svgs'}`, query?.type || '.svg');
    const file = await sourceFileReader.readFile(query?.name || 'icon.svg');
    ctx.body = file;
  })
}
