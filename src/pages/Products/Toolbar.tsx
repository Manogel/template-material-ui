import React from 'react';

import clsx from 'clsx';

import HeaderPage from '@components/HeaderPage';
import HeaderSearch from '@components/tables/HeaderSearch';
import { Box, Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  searchBox: {
    backgroundColor: theme.palette.background.default,
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
}));

type IDivParams = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type IParams = IDivParams & {
  className?: string;
};

const Toolbar = ({ className, ...rest }: IParams) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeaderPage title="Produtos" rightButtonTitle="Adicionar produto" />
      <Box mt={3}>
        <Card className={classes.searchBox}>
          <CardContent>
            <HeaderSearch />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Toolbar;