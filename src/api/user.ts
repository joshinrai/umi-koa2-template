import { request } from '@/utils';

const test = () => {
  
};

const getAuth = (data: any) => {
  return request('/user/auth', {
    method: 'GET',
    data,
  });
};

export {
  test, getAuth,
};
