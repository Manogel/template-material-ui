import React from 'react';

import clsx from 'clsx';
import { format } from 'date-fns';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  CardProps,
} from '@material-ui/core';
import getInitials from '@utils/getInitials';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-4',
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  avatar: {
    height: 100,
    width: 100,
    marginBottom: theme.spacing(1),
  },
}));

type IParams = CardProps & {
  className?: string;
};

const Profile = ({ className, ...rest }: IParams) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={user.avatar}>
            {getInitials(user.name)}
          </Avatar>
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${format(Date.now(), 'HH:mm')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

export default Profile;
