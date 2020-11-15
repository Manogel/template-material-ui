import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import palette from './palette';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette,
  shadows,
  typography,
  overrides: {
    MuiTableCell: {
      root: {
        fontSize: '14px',
        letterSpacing: '-0.05px',
        lineHeight: '21px',
      },
    },
  },
});

export default responsiveFontSizes(theme);
