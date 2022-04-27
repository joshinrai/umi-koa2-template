import { history } from 'umi';

import { RenderHeaderDom } from '@/components';

import { initialState, locations } from '../config';
import { getAuth } from './api';
let isSubApp = false;

// 初始化全局state
export async function getInitialState() {
  // const auth = await getAuth({});
  // Object.assign(initialState, auth);
  return initialState;
}

// 布局
export const layout = { 
  headerRender: (props: any, dom: any) => {
    console.log(11111, ' props is:', props);
    return <RenderHeaderDom locations={locations} initialState={initialState} props={props} />;
  },
  onError: (error: Error, info: any) => {
    console.log('错误上报 打点error, info is:', error, info);
  },
  ErrorComponent: (error: Error): React.ReactElement<any> => {
    console.log('错误页展示...');
    return <div />;
  },
  menuHeaderRender: (logo: any, text: any) => {
    return <>{<img src={require('@/assets/icon.svg')} alt="logo" />}{text}</>;
  },
  menuRender: (props: any, dom: any) => {
    return initialState?.systemError ? false : dom;
  },
  /* menuDataRender: (menu: any) => {
    return menu;
  },
  menuItemRender: (history: any, dom: any) => {
    console.log(999999, ' history, dom is:', history, dom);
    return dom;
  }, */
};

// 修改路由
export function patchRoutes({ routes }: any) {
  const firstRoutes = routes[0].routes;
  const { role, systemError } = initialState;
  if (systemError) {
    const item = firstRoutes.find(({ path }: any) => path === '/500');
    firstRoutes.splice(0, firstRoutes.length, item);
  } else if (+role !== 1) {
    const index = firstRoutes.findIndex(({ path }: any) => path === '/user');
    firstRoutes.splice(index, 1);
  }
}

// 路由导航守卫
export function onRouteChange(props: any) {
  console.log('路由导航 props is:', props);
}

// 页面渲染函数
export function render(oldRender: Function) {
  getAuth({}).then((res: any) => {
    if (+res.code === -2) {
      locations.logIn();
    } else {
      Object.assign(initialState, res.data, { isLogin: true });
      oldRender();
    }
  }).catch(err => {
    Object.assign(initialState, { systemError: true });
    history.replace('/500');
    oldRender();
  });
}

// 修改客户端的根节点参数
export function modifyClientRenderOpts(memo: any) {
  return {
    ...memo,
    rootElement: isSubApp ? 'sub-root' : memo.rootElement,    
  };
}
