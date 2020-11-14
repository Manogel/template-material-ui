import React from 'react';

import clsx from 'clsx';

import { Typography, colors } from '@material-ui/core';

import useStyles from './styles';

type IParams = {
  className?: string;
  color?: string;
  shape?: 'square' | 'rounded';
  style?: React.CSSProperties;
  variant?: 'contained' | 'outlined';
};

const Label: React.FC<IParams> = (props) => {
  const { className, variant, color, shape, children, style, ...rest } = props;

  const classes = useStyles();

  const rootClassName = clsx(
    {
      [classes.root]: true,
      [classes.rounded]: shape === 'rounded',
    },
    className,
  );

  const finalStyle = { ...style } as React.CSSProperties;

  if (variant === 'contained') {
    finalStyle.backgroundColor = color;
    finalStyle.color = '#FFF';
  } else {
    finalStyle.border = `1px solid ${color}`;
    finalStyle.color = color;
  }

  return (
    <Typography
      {...rest}
      className={rootClassName}
      style={finalStyle}
      variant="overline"
    >
      {children}
    </Typography>
  );
};

Label.defaultProps = {
  style: {},
  color: colors.grey[600],
  variant: 'contained',
  shape: 'square',
};

export default Label;
