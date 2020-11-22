import { makeStyles } from '@material-ui/core';
import gradients from '@utils/gradients';

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  avatarBlue: {
    backgroundImage: gradients.blue,
  },
  avatarGreen: {
    backgroundImage: gradients.green,
  },
  avatarOrange: {
    backgroundImage: gradients.orange,
  },
  avatarIndigo: {
    backgroundImage: gradients.indigo,
  },
  arrowForwardIcon: {
    color: theme.palette.grey[500],
  },
}));

export default useStyles;
