import { extend } from 'umi-request';
import { history } from 'umi';

const request = extend({
  prefix: '/koa',
  timeout: 1000,
});

request.interceptors.request.use((url, options) => {
  return {
    url, // : `${url}&interceptors=yes`,
    options: { ...options, interceptors: true },
  };
});

request.interceptors.response.use((response: any, options) => {
  // console.log(888888, ' 响应拦截 response, options is:', response, options, response.status, history);
  // history.replace('/500');
  return response;
});

export default request;
