const Cookies = require('js-cookie');

const configs = {
  casLocation: 'http://www.baidu.com',
  cookieList: [],
};

const logIn = () => {
  const location = window.location;
  location.href = `${configs.casLocation}${location.origin}`;
};

export default {
  ...configs,
  logout: () => {
    let domain = document.domain;
    domain = domain.substring(domain.indexOf('.'));
    configs.cookieList.forEach((name: string) => {
      Cookies.remove(name, { path: '', domain });
    });
    logIn();
  },
  logIn,
};
