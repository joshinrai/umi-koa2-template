import { useRequest } from 'umi';
import { getUsers } from './api';
// import { useTest } from '@/hooks';

const IndexPage = () => {
  const { data, error, loading } = useRequest(getUsers);
  // const test = useTest();
  // console.log(111, 'test is:', test);
  return (
    <div>
      <h1>首页{data?.msg}</h1>
    </div>
  );
};

export default IndexPage;
