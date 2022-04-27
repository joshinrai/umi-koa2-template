const API = require('../lib/api');

module.exports = class {
  fetch: any;
  ctx: any;
  clientInfo: any;
  constructor (ctx: any) {
    this.fetch = ctx.fetch;
    this.ctx = ctx;
    this.clientInfo = ctx.clientInfo;
  }

  async auth(query: any) {
    const api = API('api', 'user/detail'); // API('user', 'getTest');
    return await this.fetch({
      ...api,
      method: 'post',
      argus: [query]
    });;
  }

  async test(query: any) {
    const api = API('api', 'rules'); // API('user', 'getTest');
    return await this.fetch({
      ...api,
      method: 'post',
      argus: [query]
    });
  }
};