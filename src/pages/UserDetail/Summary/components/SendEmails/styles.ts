import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  content: {},
  sendButton: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  mailIcon: {
    marginRight: theme.spacing(1),
  },
  table: {
    marginTop: theme.spacing(2),
  },
  cell: {
    padding: theme.spacing(1),
  },
}));

export default useStyles;
