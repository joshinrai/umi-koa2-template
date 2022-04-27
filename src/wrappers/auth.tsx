// https://umijs.org/zh-CN/docs/convention-routing
import React from 'react';
import { Redirect } from 'umi'
import { connect } from 'dva';

export default connect(({ user }: any) => ({
  user,
}))((props: any) => {
  const { isLogin } = props.user;
  if (isLogin) {
    return <>{ props.children }</>;
  } else {
    return <Redirect to="/403" />;
  }
});
