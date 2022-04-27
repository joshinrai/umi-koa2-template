const url = require('url');
const libPath = require('path');
const libConfig = require('./config');
const { server, service } = libConfig;
const { port, useMock } = server;

const mockBool = process.env.NODE_ENV === 'development' && useMock;
// 接口基础路径表
const mockUrl = '../../mock/';

module.exports = (namespace: string, key: string, pathname = '') => {
  const prefix = mockBool ? mockUrl : service[namespace];
  const parsed = url.parse(prefix, true, true);

  parsed.pathname = libPath.posix.join(parsed.pathname, `${namespace}/${key}`, pathname);

  return { url: parsed.format(), isMock: mockBool };
}