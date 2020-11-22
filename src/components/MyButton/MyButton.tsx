import React from 'react';

import clsx from 'clsx';

import {
  Button as MUIButtom,
  ButtonProps,
  CircularProgress,
  CircularProgressProps,
} from '@material-ui/core';

import useStyles from './styles';

export type IMyButtonProps = ButtonProps & {
  children: string;
  loading?: boolean;
  spinner?: CircularProgressProps;
  className?: string;
  customColor?: 'error' | 'success';
};

const MyButton: React.FC<IMyButtonProps> = (props) => {
  const {
    children,
    loading,
    spinner,
    disabled,
    className,
    variant,
    customColor,
    ...buttonParams
  } = props;
  const classes = useStyles();

  const isDisabled = React.useMemo(() => {
    if (loading) return true;
    return disabled;
  }, [disabled, loading]);

  const isContained = variant === 'contained';

  const customButtonColor = {
    [classes.error_contained]: customColor === 'error' && isContained,
    [classes.success_contained]: customColor === 'success' && isContained,
    [classes.error_text]: customColor === 'error' && !variant,
    [classes.success_text]: customColor === 'success' && !variant,
  };

  return (
    <MUIButtom
      color="primary"
      size="large"
      disabled={isDisabled}
      className={clsx(className, customButtonColor)}
      variant={variant}
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
