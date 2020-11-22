import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  },
  buttonLeaf: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  expandIcon: {
    marginLeft: theme.spacing(1),
    height: 16,
    width: 16,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
