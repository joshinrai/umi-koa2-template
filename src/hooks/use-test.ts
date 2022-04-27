import { useState, useEffect } from 'react';
import { getAuth } from '@/api';

const useTest = () => {
  const [isOnline, setIsOnline] = useState(false);

  const auth = async () => {
    const { isLogin } = await getAuth({});
    console.log('isLogin is:', isLogin);
    setIsOnline(isLogin);
  }

  useEffect(() => {
    auth();
  });
  return isOnline;
};

export default useTest;
