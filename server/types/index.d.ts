// TODO: 设置全局types
declare namespace Fetch {
  interface ApiProps {
    url: string;
    isMock: boolean;
  }

  interface OptionsProps {
    method: string;
    params: any;
    // [key: string]: any;
  }
}

// /// <reference path="fetch.d.ts" />
