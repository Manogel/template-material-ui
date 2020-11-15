import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';

import { Logo } from '@assets/svgs';
import { useAuth } from '@contexts/auth';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  AppBarProps,
  Tooltip,
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';

import useStyles from './styles';

type IParams = AppBarProps & {
  className?: string;
  onMobileNavOpen(): void;
};

const TopBar = ({ className, onMobileNavOpen, ...rest }: IParams) => {
  const { signOut } = useAuth();
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <Tooltip title="Notificações" aria-label="notificações" arrow>
            <IconButton color="inherit">
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Sair" aria-label="sair" arrow>
            <IconButton color="inherit" onClick={signOut}>
              <InputIcon />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
