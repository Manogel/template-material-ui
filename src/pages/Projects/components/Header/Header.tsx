import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';

import { Grid, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

type IParams = IDivParams & {
  className?: string;
};

const Header = (props: IParams) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h1" variant="h3">
            Projects
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            component={RouterLink}
            to="create"
            variant="contained"
          >
            Add project
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
