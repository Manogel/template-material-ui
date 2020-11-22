import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  content: {
    padding: 0,
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0,
    },
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
