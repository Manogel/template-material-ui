import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';

import GenericMoreButton from '@components/GenericMoreButton';
import Label from '@components/Label';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import useStyles from './styles';

type IParams = IDivParams & {
  className?: string;
};

const Invoices = (props: IParams) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const statusColors: {
    [key: string]: 'warning' | 'success' | 'error';
  } = {
    pending: 'warning',
    paid: 'success',
    rejected: 'error',
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Card className={classes.card}>
        <CardHeader action={<GenericMoreButton />} title="Customer invoices" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>#f605f980</TableCell>
                    <TableCell>14/11/2020 | 15:11</TableCell>
                    <TableCell>
                      Freelancer Subscription (12/05/2019 - 11/06/2019)
                    </TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell>$5.25</TableCell>
                    <TableCell>
                      <Label color={statusColors.paid} variant="outlined">
                        paid
                      </Label>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="primary"
                        component={RouterLink}
                        size="small"
                        to="/management/invoices/1"
                        variant="outlined"
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoices;
