import { createMuiTheme, colors } from '@material-ui/core';

import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: '#F4F6F8',
    },
    primary: {
      main: colors.indigo[500],
    },
    secondary: {
      main: colors.indigo[500],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shadows,
  typography,
});

export default theme;
