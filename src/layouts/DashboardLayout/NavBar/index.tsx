import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { useAuth } from '@contexts/auth';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from '@material-ui/core';

import navItems from './items';
import Navigation from './Navigation';
import useStyles from './styles';

type IParams = {
  onMobileClose: () => void;
  openMobile?: boolean;
};

const NavBar = ({ onMobileClose, openMobile }: IParams) => {
  const { user } = useAuth();
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      bgcolor="white"
      overflow="auto"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
        minHeight="fit-content"
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.email}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {navItems.map((item) => (
            <Navigation
              component="div"
              key={item.title}
              pages={item.pages}
              title={item.title}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
