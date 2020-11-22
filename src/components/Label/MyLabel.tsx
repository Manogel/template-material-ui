import React from 'react';

import clsx from 'clsx';

import { Typography } from '@material-ui/core';

import useStyles from './styles';

type ILabelColorTypes =
  | 'success'
  | 'error'
  | 'primary'
  | 'grey'
  | 'warning'
  | 'info';

type IParams = {
  className?: string;
  color?: ILabelColorTypes;
  shape?: 'square' | 'rounded';
  style?: React.CSSProperties;
  variant?: 'contained' | 'outlined';
};

const Label: React.FC<IParams> = (props) => {
  const {
    className,
    variant = 'contained',
    color,
    shape,
    children,
    style,
    ...rest
  } = props;

  const classes = useStyles();

  const isContained = variant === 'contained';

  const rootClassName = clsx(
    {
      [classes.root]: true,
      [classes.rounded]: shape === 'rounded' && isContained,
      [classes.success_contained]: color === 'success' && isContained,
      [classes.error_contained]: color === 'error' && isContained,
      [classes.primary_contained]: color === 'primary' && isContained,
      [classes.grey_contained]: color === 'grey' && isContained,
      [classes.success_outlined]: color === 'success' && !isContained,
      [classes.error_outlined]: color === 'error' && !isContained,
      [classes.primary_outlined]: color === 'primary' && !isContained,
      [classes.grey_outlined]: color === 'grey' && !isContained,
    },
    className,
  );

  return (
    <Typography
      {...rest}
      className={rootClassName}
      style={style}
      variant="overline"
    >
      {children}
    </Typography>
  );
};

Label.defaultProps = {
  style: {},
  color: 'grey',
  shape: 'square',
};

export default Label;
