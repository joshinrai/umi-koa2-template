const Axios = require('axios');

declare namespace Fetch {
  interface OptionsProps {
    url: string;
    isMock?: boolean;
    method: string;
    argus: any;
  }
}

class RequestUtil {
  [x: string]: (config: any, ...restOfName: any) => RequestUtil;
  constructor(config?: any) {
    const instance = Axios.create(config);
    Object.assign(this, instance, { ...this });
  };
  updateCookie(instance: any, cookie: string): any {
    instance.defaults.headers.cookie = cookie;
  };
  requestUtilFetch({ url, isMock, method, argus }: Fetch.OptionsProps): any {
    return isMock ? require(`${url}.json`) : this[method || 'get'](url, ...argus);
  };
}

module.exports = RequestUtil;
