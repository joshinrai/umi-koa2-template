export default {
  '/koa/': {
    target: 'http://172.20.122.239:3000',
    changeOrigin: false,
    logLevel: 'debug',
  },
  '/api/': {
    target: 'http://172.20.122.239:3000',
    changeOrigin: false,
    pathRewrite: { '^/api': '' },
    logLevel: 'debug',
  },
};
