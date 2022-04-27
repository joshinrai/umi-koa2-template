import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '脚手架侧边栏',
  pwa: false,
  logo: 'http://172.20.122.239:3000/koa/staticSource/getFile?name=icon.svg&type=.svg',
  iconfontUrl: '',
}

export default Settings;
