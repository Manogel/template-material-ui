import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  mainActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  notice: {
    marginTop: theme.spacing(1),
  },
  deleteButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.background.default,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
