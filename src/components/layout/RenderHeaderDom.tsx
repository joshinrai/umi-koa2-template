import { Link, useLocation } from 'umi';
import { Breadcrumb } from 'antd';
import { Dropdown, Avatar } from 'antd';
import { HomeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { LogOut, LayoutHeader, HeaderRight } from '@/styles';

interface PropTypes {
  props: any,
  locations: any
  initialState: any,
}

// 改写运行时配置的headerRender方法，将面包屑写入头部
const RenderHeaderDom = ({
  props, locations, initialState,
}: PropTypes) => {
  const loc = useLocation();
  const breadcrumbList = loc?.pathname?.split?.('/');
  return (
    <LayoutHeader>
      <div className="header_left">
        {
          initialState?.showBreadcrumb && breadcrumbList?.length ? (
            <Breadcrumb>
              {
                breadcrumbList?.map?.((name: string, index: number) => {
                  const path = `/${name}`;
                  const pathItem = props?.breadcrumb?.[path];
                  return !index || name ? (
                    <Breadcrumb.Item key={`${name || 'path'}${index}`}>
                      <Link to={index ? path : '/'}>{index ? (pathItem?.name || pathItem?.title) : <HomeOutlined />}</Link>
                    </Breadcrumb.Item>
                  ) : null;
                })
              }
            </Breadcrumb>
          ) : null
        }
      </div>
      <Dropdown
        overlay={
          <LogOut>
            <LogoutOutlined />
            <span className="logout" onClick={locations.logout}>退出登录</span>
          </LogOut>
        }
      >
        <HeaderRight>
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          {initialState?.cnname || ''}
        </HeaderRight>
      </Dropdown>
    </LayoutHeader>
  );
};

export default RenderHeaderDom;
