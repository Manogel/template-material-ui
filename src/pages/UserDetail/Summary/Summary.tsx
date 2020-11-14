import React, { useState } from 'react';

import { Grid, GridProps } from '@material-ui/core';

import { UserInfo, Invoices, SendEmails } from './components';
import OtherActions from './components/OtherActions';

type IParams = GridProps & {
  className?: string;
};

const Summary = (props: IParams) => {
  const { className, ...rest } = props;

  const [customer] = useState({});

  if (!customer) {
    return null;
  }

  return (
    <Grid {...rest} className={className} container spacing={3}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <UserInfo />
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Invoices />
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <SendEmails />
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <OtherActions />
      </Grid>
    </Grid>
  );
};

export default Summary;
