import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
    borderRadius: theme.shape.borderRadius,
    lineHeight: '10px',
    fontSize: '10px',
    height: 20,
    minWidth: 20,
    whiteSpace: 'nowrap',
    padding: theme.spacing(0.5, 1),
  },
  rounded: {
    borderRadius: 10,
    padding: theme.spacing(0.5),
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
  primary_contained: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  grey_contained: {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.background.default,
    '&:hover': {
      background: theme.palette.grey[700],
    },
  },
  warning_contained: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.background.default,
    '&:hover': {
      background: theme.palette.warning.dark,
    },
  },
  info_contained: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.background.default,
    '&:hover': {
      background: theme.palette.info.dark,
    },
  },
  error_outlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.error.main}`,
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.background.default,
    },
  },
  success_outlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.success.main}`,
    color: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.background.default,
    },
  },
  primary_outlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
    },
  },
  grey_outlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.grey[600]}`,
    color: theme.palette.grey[600],
    '&:hover': {
      backgroundColor: theme.palette.grey[700],
      color: theme.palette.background.default,
    },
  },
  warning_outlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.warning.main}`,
    color: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.background.default,
    },
  },
  info_outlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.background.default,
    },
  },
}));

export default useStyles;
