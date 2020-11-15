import React, { useState } from 'react';

import HeaderPage from '@components/HeaderPage';
import Page from '@components/Page';
import HeaderSearch from '@components/tables/HeaderSearch';
import { Box, Card, Container, makeStyles } from '@material-ui/core';

import data from './data';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },

  cardContainer: {
    backgroundColor: theme.palette.background.default,
  },
}));

const Users = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <HeaderPage title="Usuários" rightButtonTitle="Adicionar usuário" />
        <Box mt={3}>
          <Card className={classes.cardContainer}>
            <HeaderSearch placeholder="Buscar usuários" />
            <Results customers={customers} />
          </Card>
        </Box>
      </Container>
    </Page>
  );
};

export default Users;
