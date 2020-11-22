import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Popover,
  CardHeader,
  CardActions,
  Divider,
  Button,
  colors,
  makeStyles,
} from '@material-ui/core';

import { NotificationList, EmptyList } from './components';
import ButtonNotificationIcon from './components/Icon';
import notificationsMockData from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    maxWidth: '100%',
    backgroundColor: theme.palette.background.default,
  },
  actions: {
    backgroundColor: colors.grey[50],
    justifyContent: 'center',
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600],
  },
}));

const NotificationsPopover = () => {
  const classes = useStyles();
  const [notifications] = React.useState(notificationsMockData);
  const [openNotifications, setOpenNotifications] = React.useState(false);
  const notificationsRef = React.useRef(null);

  const toggleNotificationsBox = () => {
    setOpenNotifications((state) => !state);
  };

  return (
    <>
      <ButtonNotificationIcon
        onClick={toggleNotificationsBox}
        ref={notificationsRef}
        badgeContent={notifications.length}
      />
      <Popover
        anchorEl={notificationsRef.current}
        onClose={toggleNotificationsBox}
        open={openNotifications}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <div className={classes.root}>
          <CardHeader title="Notificações" />
          <Divider />
          {notifications.length > 0 ? (
            <NotificationList notifications={notifications} />
          ) : (
            <EmptyList />
          )}
          <Divider />
          <CardActions className={classes.actions}>
            <Button component={RouterLink} size="small" to="#">
              Ver tudo
            </Button>
          </CardActions>
        </div>
      </Popover>
    </>
  );
};

export default NotificationsPopover;
