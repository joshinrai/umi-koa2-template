import { defineConfig } from 'umi';
import { common, layout, router as routes, proxy } from './config';

export default defineConfig({
  ...common,
  layout,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  proxy,
  fastRefresh: {},
});
