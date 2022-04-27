const { service: s } = require('../lib/config');

module.exports = (res: any, ctx: any) => {
  if (+res?.data?.code === -2) {
    const { response } = ctx;
  }
  return res?.data || { message: '数据格式不匹配' };
}
