const fetchRequest= require('../utils/request');
const fetchFormat= require('../utils/formatResponseData');

declare namespace Fetch {
  interface OptionsProps {
    url: string;
    isMock?: boolean;
    method: string;
    argus: any;
    [key: string]: any;
  }
}

const instance = new fetchRequest({});
instance.interceptors.request.use((request: any) => {
  // console.log(88888, ' conf is:', request);
  return request;
}, (err: any) => {
  // console.log(777777, ' err is:', err);
  return err;
});

module.exports = () => async (ctx: any, next: any) => {
  ctx.fetch = async (options: Fetch.OptionsProps) => {
    try {

      instance.updateCookie(instance, ctx.header.cookie || '');

      const res = await instance.requestUtilFetch(options);

      return fetchFormat(res, ctx);
    } catch (err: any) {
      const { errno, message, code } = err;
      return err?.response?.data || {
        statusCode: errno || 500,
        code: code || '',
        message: message || 'node服务异常'
      };
    }
  }
  await next();
};
