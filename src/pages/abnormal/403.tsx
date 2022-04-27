import { Result, Button } from 'antd';
import { NotFoundPage } from '@/styles';

const NoAccess = () => {
  return (
    <NotFoundPage>
      <section className="404">
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<Button type="primary">申请权限</Button>}
        />
      </section>
    </NotFoundPage>
    );
};

export default NoAccess;
