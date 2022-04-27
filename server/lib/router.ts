const routerPath = require('path');
const glob = require('glob');
const Router = require('koa-router');

const router = new Router({
  prefix: '/koa'
});
const controllersDir = routerPath.join(__dirname, '../controllers');

glob.sync('**/*.[jt]s', {
  cwd: controllersDir
}).forEach((ctrPath: any) => {
  const routePath = new Router();
  ctrPath = ctrPath.replace(/([/\\]?index)?\.[jt]s$/, '');
  ctrPath && require(routerPath.join(controllersDir, ctrPath))(routePath);
  router.use(`/${ctrPath}`, routePath.routes(), routePath.allowedMethods());
});

// 配置默认路由(index文件设置默认路由未生效)
/* const routePath = new Router();
require(routerPath.join(controllersDir, 'index'))(routePath)
router.use('/', routePath.routes(), routePath.allowedMethods()); */
// require(routerPath.join(controllersDir, './index.ts'))(router);

console.log('\x1B[36m%s\x1B[0m', `all routes is ${JSON.stringify(router)}`);

module.exports = router;
