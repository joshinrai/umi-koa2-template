declare namespace Fetch {
  interface ApiProps {
    url: string;
    isMock: boolean;
  }

  interface OptionsProps {
    method: string;
    params: any;
  }
}

/* declare module 'Fetch' {
  namespace Fetch {
    interface ApiProps {
      url: string;
      isMock: boolean;
    }
  
    interface OptionsProps {
      method: string;
      params: any;
      [key: string]: any;
    }
  }
} */
