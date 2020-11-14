import React from 'react';

import clsx from 'clsx';

import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography,
  CardProps,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

import useStyles from './styles';

type IParams = CardProps & {
  className?: string;
};

const OtherActions = (props: IParams) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Other actions" />
      <Divider />
      <CardContent>
        <div className={classes.mainActions}>
          <Button>
            <NotInterestedIcon className={classes.buttonIcon} />
            Close Customer Account
          </Button>
          <Button>
            <GetAppIcon className={classes.buttonIcon} />
            Export client data
          </Button>
        </div>
        <Typography className={classes.notice} variant="body2">
          Remove this this customer’s data if he requested that, if not please
          be aware that what has been deleted can never brough back
        </Typography>
        <Button className={classes.deleteButton}>
          <DeleteIcon className={classes.buttonIcon} />
          Delete Customer Account
        </Button>
      </CardContent>
    </Card>
  );
};

export default OtherActions;
