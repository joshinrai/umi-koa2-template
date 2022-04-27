import { history } from 'umi';
import { Result, Button } from 'antd';
import { NotFoundPage } from '@/styles';

const Page500 = (props: any) => {
  return (
    <NotFoundPage>
      <section className="404">
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
        />
      </section>
    </NotFoundPage>
  );
};

export default Page500;
