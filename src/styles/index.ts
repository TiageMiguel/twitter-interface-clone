import { createGlobalStyle, DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    primary: '#000',
    secondary: '#15181C',
    search: '#202327',
    white: '#D9D9D9',
    gray: '#7A7A7A',
    outline: '#2F3336',
    retweet: '#00C06B',
    like: '#E8265E',
    twitter: '#33A1F2',
    twitterDarkHover: '#011017',
    twitterLightHover: '#2C8ED6',
  },
};

const GlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    color: ${Theme.colors.white};
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html {
    background: ${Theme.colors.primary};
  }
`;

export { GlobalTheme, Theme };
