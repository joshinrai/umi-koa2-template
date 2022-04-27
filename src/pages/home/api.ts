import { request } from '@/utils';

const test = () => {
  
};

const getUsers = (data: any) => {
  return request('/user/info', {
    method: 'GET',
    data,
  });
};

export {
  test, getUsers
};
