const Koa = require('koa');
const serverConfig = require('./lib/config');
const serverRouter = require('./lib/router');
const serverFetch = require('./middleWares/fetch');

const app = new Koa();

// http请求中间件
app.use(serverFetch());
// 加载路由中间件
app.use(serverRouter.routes()).use(serverRouter.allowedMethods());

const { server: { serverPort = 3000 } } = serverConfig;

app.listen(serverPort, () => {
  console.log('\x1B[36m%s\x1B[0m', `server start at ${serverPort}`);
});
