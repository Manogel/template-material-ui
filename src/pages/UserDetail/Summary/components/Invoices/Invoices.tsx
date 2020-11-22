import React from 'react';

import clsx from 'clsx';

import Label from '@components/Label';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  CardProps,
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EditIcon from '@material-ui/icons/Edit';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';

import useStyles from './styles';

type IParams = CardProps & {
  className?: string;
};

const Invoices = (props: IParams) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const handleEditOpen = () => {
    //
  };

  const [paidInvoices, paidTotal] = [[1, 2], '$25.00', 2];
  const [draftInvoices, draftTotal] = [[2], '$25.00', 1];
  const [dueInvoices, dueTotal] = [[], '$0.00', 0];
  const [refundedInvoices, refundedTotal] = [[1, 2, 1, 2], '$45.00', 4];
  const [incomeInvoices, incomeTotal] = [[1, 2], '$55.00', 2];

  const isValid = false;

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Invoices/Billing" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Auto CC Pay</TableCell>
              <TableCell>
                4142 **** **** **** ****
                <div>
                  <Label color={isValid ? 'success' : 'error'}>
                    {isValid ? 'YES' : 'NO'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Paid</TableCell>
              <TableCell>
                {paidInvoices.length} ({paidTotal})
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft</TableCell>
              <TableCell>
                {draftInvoices.length} ({draftTotal})
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Unpaid/Due</TableCell>
              <TableCell>
                {dueInvoices.length} ({dueTotal})
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Refunded</TableCell>
              <TableCell>
                {refundedInvoices.length} ({refundedTotal})
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Gross Income</TableCell>
              <TableCell>
                {incomeInvoices.length} ({incomeTotal})
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        <Button>
          <AttachMoneyIcon className={classes.buttonIcon} />
          Create Invoice
        </Button>
        <Button>
          <ReceiptIcon className={classes.buttonIcon} />
          Generate Due Invoices
        </Button>
      </CardActions>
    </Card>
  );
};

export default Invoices;
