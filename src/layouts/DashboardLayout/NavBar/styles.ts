import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    overflowY: 'auto',
  },
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
    marginBottom: 5,
  },
}));

export default useStyles;
