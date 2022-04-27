export default [
  {
    extra: true,
    path: '/',
    component: '@/pages/home/index',
    menu: {
      name: '首页',
      icon: 'HomeOutlined',
    },
  },
  {
    name: '管理中心',
    icon: 'SettingOutlined',
    path: '/user',
    routes: [{
      extra: true,
      name: '用户',
      path: '/user',
      component: '@/pages/user',
      wrappers: [
        '@/wrappers/auth',
      ],
    }, {
      extra: true,
      path: '/user/setting',
      component: '@/pages/user/setting',
    }],
  },
  {
    extra: true,
    title: '无权限',
    path: '/403',
    component: '@/pages/abnormal/403',
  },
  {
    extra: true,
    title: '服务端异常',
    path: '/500',
    component: '@/pages/abnormal/500',
  },
  {
    component: '@/pages/abnormal/404',
  }
];
