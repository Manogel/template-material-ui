import React, { useState } from 'react';

import clsx from 'clsx';

import Label from '@components/Label';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  CardProps,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';

import { UserEdit } from './components';
import useStyles from './styles';

type IParams = CardProps & {
  className?: string;
};

const UserInfo = (props: IParams) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const isVerified = true;

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Customer info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>
                ekaterina@devias.io
                <div>
                  <Label color={isVerified ? 'success' : 'warning'}>
                    {isVerified ? 'Email verified' : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Phone</TableCell>
              <TableCell> +55 748 327 439</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell> Alabama</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>United States</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>Street John Wick, no. 7</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>House #25</TableCell>
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
          <LockOpenIcon className={classes.buttonIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Customer
        </Button>
      </CardActions>
      <UserEdit onClose={handleEditClose} open={openEdit} />
    </Card>
  );
};

export default UserInfo;
