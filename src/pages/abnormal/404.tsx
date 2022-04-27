import { history } from 'umi';
import { Result, Button } from 'antd';
import { NotFoundPage } from '@/styles';

const Page404 = (props: any) => {
  return (
    <NotFoundPage>
      <section className="404">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary" onClick={() => history.replace('/')}>回到首页</Button>}
        />
      </section>
    </NotFoundPage>
  );
};

export default Page404;
