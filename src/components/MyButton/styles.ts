import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonProgress: {
    position: 'absolute',
  },
  error_contained: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.background.default,
    '&:hover': {
      background: theme.palette.error.dark,
    },
  },
  success_contained: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.background.default,
    '&:hover': {
      background: theme.palette.success.dark,
    },
  },
  error_text: {
    color: theme.palette.error.main,
  },
  success_text: {
    color: theme.palette.success.main,
  },
  default: {},
}));

export default useStyles;
