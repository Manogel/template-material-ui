import { colors } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const palette = {
  background: {
    default: colors.common.white,
    paper: '#F4F6F8',
  },
  primary: {
    contrastText: '#fff',
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100],
  },
  secondary: {
    contrastText: '#fff',
    dark: colors.blue[900],
    main: colors.blue.A400,
    light: colors.blue.A400,
  },
  error: {
    contrastText: '#fff',
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
  },
} as PaletteOptions;

export default palette;
