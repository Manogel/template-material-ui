import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  card: {
    backgroundColor: theme.palette.background.default,
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1150,
  },
}));

export default useStyles;
