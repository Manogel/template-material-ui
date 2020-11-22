import React, { forwardRef } from 'react';

import {
  Badge,
  IconButton,
  Tooltip,
  IconButtonProps,
  makeStyles,
  colors,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';

const useStyles = makeStyles(() => ({
  notificationsBadge: {
    backgroundColor: colors.orange[600],
  },
}));

type IParams = IconButtonProps & {
  badgeContent: number;
};

const ButtonNotificationIcon = forwardRef<any, IParams>((props, ref) => {
  const { badgeContent, ...restButtonIconProps } = props;
  const classes = useStyles();

  return (
    <Tooltip title="Notificações" aria-label="notificações" arrow>
      <IconButton color="inherit" {...restButtonIconProps} ref={ref}>
        <Badge
          badgeContent={badgeContent}
          classes={{ badge: classes.notificationsBadge }}
          variant="dot"
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
});

export default ButtonNotificationIcon;
