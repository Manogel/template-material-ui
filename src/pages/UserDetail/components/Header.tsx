import React from 'react';

import clsx from 'clsx';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {},
}));

type IParams = IDivParams & {
  className?: string;
};

const Header = (props: IParams) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const customer = {
    name: 'Ekaterina Tankova',
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography component="h2" gutterBottom variant="overline">
        User
      </Typography>
      <Typography component="h1" variant="h3">
        {customer.name}
      </Typography>
    </div>
  );
};

export default Header;
