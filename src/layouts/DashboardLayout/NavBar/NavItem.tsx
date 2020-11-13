import React from 'react';
import { Props } from 'react-feather';
import { NavLink as RouterLink } from 'react-router-dom';

import clsx from 'clsx';

import { Button, ListItem } from '@material-ui/core';

import useStyles from './NavItemStyles';

type IParams = {
  icon: React.FC<Props>;
  href: string;
  title: string;
  className?: string;
};

const NavItem = ({ className, href, icon: Icon, title, ...rest }: IParams) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <span className={classes.title}>{title}</span>
      </Button>
    </ListItem>
  );
};

export default NavItem;
