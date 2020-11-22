import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[2],
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  searchInput: {
    flexGrow: 1,
  },
  searchButton: {
    marginLeft: theme.spacing(2),
    boxShadow: theme.shadows[2],
  },
}));

export default useStyles;
