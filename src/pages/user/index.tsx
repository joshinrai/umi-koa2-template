import { useAccess, Access } from 'umi';
const UserPage = () => {
  const access = useAccess();
  console.log(22222, ' access is:', access);
  return (
    <div>
      <h1>user页面</h1>
      <Access
        accessible={access.test}
        fallback={<div>当前dom没权限</div>}
      >
        <div>user页面主体</div>
      </Access>
    </div>
  );
};

UserPage.wrappers = ['@/wrappers/auth']

export default UserPage;
