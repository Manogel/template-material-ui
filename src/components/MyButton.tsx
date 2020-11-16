import React from 'react';

import clsx from 'clsx';

import {
  Button as MUIButtom,
  ButtonProps,
  CircularProgress,
  CircularProgressProps,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  buttonProgress: {
    position: 'absolute',
  },
}));

export type IMyButtonProps = ButtonProps & {
  children: string;
  loading?: boolean;
  spinner?: CircularProgressProps;
};

const MyButton: React.FC<IMyButtonProps> = (props) => {
  const { children, loading, spinner, disabled, ...buttonParams } = props;
  const classes = useStyles();

  const isDisabled = React.useMemo(() => {
    if (loading) return true;
    return disabled;
  }, [disabled, loading]);

  return (
    <MUIButtom
      color="primary"
      fullWidth
      size="large"
      variant="contained"
      disabled={isDisabled}
      {...buttonParams}
    >
      {children}
      {loading && (
        <CircularProgress
          size={22}
          color="primary"
          {...spinner}
          className={clsx(classes.buttonProgress, spinner?.className)}
        />
      )}
    </MUIButtom>
  );
};

export default MyButton;
