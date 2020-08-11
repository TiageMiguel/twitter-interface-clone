import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      search: string;
      white: string;
      gray: string;
      outline: string;
      retweet: string;
      like: string;
      twitter: string;
      twitterDarkHover: string;
      twitterLightHover: string;
    };
  }
}
