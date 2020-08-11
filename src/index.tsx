import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import { GlobalTheme, Theme } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalTheme />
      <Layout />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
