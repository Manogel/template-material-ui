import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';
import { formatDistanceToNow } from 'date-fns';
import ptbr from 'date-fns/locale/pt-BR';

import { INotification } from '@components/NotificationsPopover/data';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListProps,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CodeIcon from '@material-ui/icons/Code';
import PaymentIcon from '@material-ui/icons/Payment';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import StoreIcon from '@material-ui/icons/Store';

import useStyles from './styles';

type IParams = ListProps & {
  notifications: INotification[];
  className?: string;
};

const NotificationList = (props: IParams) => {
  const { notifications, className, ...rest } = props;

  const classes = useStyles();

  const avatars: {
    [key: string]: JSX.Element;
  } = {
    order: (
      <Avatar className={classes.avatarBlue}>
        <PaymentIcon />
      </Avatar>
    ),
    user: (
      <Avatar className={classes.avatarOrange}>
        <PeopleIcon />
      </Avatar>
    ),
    project: (
      <Avatar className={classes.avatarGreen}>
        <StoreIcon />
      </Avatar>
    ),
    feature: (
      <Avatar className={classes.avatarIndigo}>
        <CodeIcon />
      </Avatar>
    ),
  };

  return (
    <List {...rest} className={clsx(classes.root, className)} disablePadding>
      {notifications.map((notification, i) => (
        <ListItem
          className={classes.listItem}
          component={RouterLink}
          divider={i < notifications.length - 1}
          key={notification.id}
          to="#"
        >
          <ListItemAvatar>
            {avatars[notification.type] || avatars.feature}
          </ListItemAvatar>
          <ListItemText
            primary={notification.title}
            primaryTypographyProps={{ variant: 'body1' }}
            secondary={formatDistanceToNow(notification.created_at, {
              locale: ptbr,
            })}
          />
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </ListItem>
      ))}
    </List>
  );
};

export default NotificationList;
