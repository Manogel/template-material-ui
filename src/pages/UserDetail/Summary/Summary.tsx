import React, { useState } from 'react';

import clsx from 'clsx';

import { Grid, GridProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import { UserInfo } from './components';

const useStyles = makeStyles(({ palette }) => ({
  root: {},
}));

type IParams = GridProps & {
  className?: string;
};

const Summary = (props: IParams) => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [customer] = useState({});

  if (!customer) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <UserInfo />
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        {/* <Invoices customer={customer} /> */}
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        {/* <SendEmails customer={customer} /> */}
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        {/* <OtherActions /> */}
      </Grid>
    </Grid>
  );
};

export default Summary;
