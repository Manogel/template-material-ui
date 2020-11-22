import React from 'react';

import clsx from 'clsx';

import emptyImg from '@assets/svgs/undraw_empty.svg';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  image: {
    height: 240,
    backgroundImage: `url("${emptyImg}")`,
    backgroundPositionX: 'right',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginBottom: theme.spacing(1),
  },
}));

const EmptyList = (props: IDivParams) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.image} />
      <Typography variant="h4">Não há nada por aqui...</Typography>
    </div>
  );
};

export default EmptyList;
