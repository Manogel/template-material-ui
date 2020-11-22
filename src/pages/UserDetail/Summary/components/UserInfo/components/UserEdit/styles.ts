import { colors, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.default,
  },
  container: {
    marginTop: theme.spacing(3),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  saveButton: {
    color: theme.palette.background.default,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

export default useStyles;
