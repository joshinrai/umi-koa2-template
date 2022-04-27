import { getInitialState } from '@/app'
const model = {
  namespace: 'user',
  state: { isLogin: false },
  reducers: {
    'get'(state: any, { payload }: any) {
      return {...state, ...payload};
    },
  },
  subscriptions: {
    async setup({ dispatch }: any) {
      const res = await getInitialState();
      dispatch({
        type: 'get',
        payload: res,
      });
    }
  },
};
export default model;