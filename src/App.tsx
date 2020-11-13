import React from 'react';
import { useRoutes } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyles from '@styles/global';
import theme from '@styles/theme';

import '@utils/chartjs';
import AppProvider from './contexts';
import routes from './routes/index';

export default function App() {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyles />
        {routing}
      </AppProvider>
    </ThemeProvider>
  );
}
