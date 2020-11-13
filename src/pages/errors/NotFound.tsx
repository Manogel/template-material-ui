import React from 'react';

import pageNotFoundImg from '@assets/svgs/page_not_found.svg';
import Page from '@components/Page';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560,
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="404">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h1">
            404: A página que você está procurando não está aqui
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            Ou você tentou um caminho obscuro ou veio aqui por engano. Seja o
            que for, tente usar a navegação
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src={pageNotFoundImg}
            />
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFound;
