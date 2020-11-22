import React from 'react';

import clsx from 'clsx';

import { Typography, makeStyles } from '@material-ui/core';

import { INavigationPage } from '../items';
import NavigationList from './NavigationList';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

type INavigationParams = {
  className?: Element;
  component?: React.ElementType;
  pages: INavigationPage[];
  title?: string;
};

const Navigation = (props: INavigationParams) => {
  const {
    title,
    pages,
    className,
    component: Component = 'nav',
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Component {...rest} className={clsx(classes.root, className)}>
      {title && <Typography variant="overline">{title}</Typography>}
      <NavigationList depth={0} pages={pages} />
    </Component>
  );
};

export default Navigation;
